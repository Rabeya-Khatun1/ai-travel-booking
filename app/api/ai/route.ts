import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    // Graceful offline fallback if keys are missing from development environment
    if (!apiKey) {
      console.warn("OpenAI API key missing. Falling back to structured mock data.");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return NextResponse.json({
        title: `Mock AI Trip: "${prompt}"`,
        destination: "OpenAI Configuration Required",
        duration: "3 Days",
        budget: "Unlimited",
        days: [
          {
            day: 1,
            theme: "System Setup",
            activities: [
              { time: "09:00 AM", desc: "Add OPENAI_API_KEY to your .env.local file" },
              { time: "11:00 AM", desc: "Restart the Next.js development server" },
            ]
          }
        ],
        budgetTips: [
          "Please configure your OpenAI key to unlock actual generative AI functionalities."
        ]
      });
    }

    const systemInstruction = `
      You are an expert global travel planner AI.
      The user will give you a prompt. You must generate a highly realistic, budget-aware travel itinerary.
      Output exactly and ONLY raw JSON matching this TypeScript interface:
      {
        "title": string (catchy title),
        "destination": string,
        "duration": string,
        "budget": string,
        "days": [
          {
            "day": number,
            "theme": string,
            "activities": [
              { "time": string (e.g. "09:00 AM"), "desc": string }
            ]
          }
        ],
        "budgetTips": string[]
      }
    `;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
        temperature: 0.7,
        messages: [
          { role: "system", content: systemInstruction },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || "Failed to contact OpenAI");
    }

    const jsonFormat = await response.json();
    const contentStr = jsonFormat.choices[0].message.content;
    const itinerary = JSON.parse(contentStr);

    return NextResponse.json(itinerary);

  } catch (error: any) {
    console.error("AI Generation Error:", error.message);
    return NextResponse.json(
      { error: "Generation failed. Ensure your API key is valid and you have standard quota available." },
      { status: 500 }
    );
  }
}
