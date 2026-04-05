"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Star, MapPin, Calendar, Wallet, Check, MessageSquare, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { mockDestinations } from "@/data";

export default function DetailsPage() {
  const params = useParams();
  const id = params.id as string;
  
  const destination = mockDestinations.find(d => d.id === id);
  
  const [isReserving, setIsReserving] = useState(false);
  const [reserveSuccess, setReserveSuccess] = useState(false);
  
  const handleReserve = () => {
    setIsReserving(true);
    setTimeout(() => {
      setIsReserving(false);
      setReserveSuccess(true);
      setTimeout(() => setReserveSuccess(false), 4000);
    }, 2000);
  };
  
  // Related destinations (excluding current, picking a few)
  const related = mockDestinations.filter(d => d.id !== id).slice(0, 3);

  // Reviews State
  const [reviews, setReviews] = useState([
    { id: 1, user: "Alice", text: "Absolutely incredible experience. Highly recommended!", rating: 5 },
    { id: 2, user: "Bob", text: "Great place, but the weather was a bit unpredictable.", rating: 4 }
  ]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(5);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.trim() === "") return;
    
    setReviews([
      ...reviews, 
      { id: Date.now(), user: "You", text: newReview, rating: newRating }
    ]);
    setNewReview("");
    setNewRating(5);
  };

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
        <Link href="/explore" className="text-primary hover:underline">Return to Explore</Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Hero Image / Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-secondary/20">
        {destination.imageUrl && (
          <img 
            src={destination.imageUrl} 
            alt={destination.name}
            className="absolute inset-0 w-full h-full object-cover z-0" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <div className="absolute top-8 left-4 md:left-8 z-20">
          <Link href="/explore" className="flex items-center gap-2 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full font-medium hover:bg-background transition-colors text-sm shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
        
        <div className="absolute bottom-8 left-0 w-full z-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-primary font-bold mb-2 bg-background/80 backdrop-blur-md inline-flex px-3 py-1 rounded-full text-sm">
              <MapPin className="w-4 h-4" /> {destination.location}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground drop-shadow-md mb-4">{destination.name}</h1>
            <div className="flex items-center gap-4 text-foreground font-medium">
              <div className="flex items-center gap-1 bg-background/80 px-3 py-1 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 
                {destination.rating} ({destination.reviews} Reviews)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b border-foreground/10 pb-2">Overview</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {destination.description}
                <br /><br />
                Whether you're looking for adventure or relaxation, {destination.name} provides the perfect getaway. Immerse yourself in the local culture, taste exquisite cuisine, and create memories that will last a lifetime. Book now and let our AI handle the intricate details of your schedule.
              </p>
            </section>

            {/* Key Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground border-b border-foreground/10 pb-2">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   "Accommodation in premium hotels",
                   "Daily complimentary breakfast",
                   "Airport transfers",
                   "AI-generated customized itinerary",
                   "24/7 dedicated support",
                   "Local taxes and fees included"
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-primary/10 p-1 rounded-full text-primary">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/80 font-medium">{item}</span>
                    </div>
                 ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="bg-foreground/5 p-6 md:p-8 rounded-3xl border border-foreground/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" /> Traveler Reviews
              </h2>
              
              <div className="space-y-6 mb-8">
                {reviews.map((r) => (
                  <div key={r.id} className="bg-background p-6 rounded-2xl border border-foreground/5 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div className="font-bold flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-xs">{r.user.charAt(0)}</div>
                         {r.user}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < r.rating ? "text-yellow-500 fill-yellow-500" : "text-foreground/20"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground/70">{r.text}</p>
                  </div>
                ))}
              </div>

              {/* Add Review Form */}
              <form onSubmit={handleAddReview} className="bg-background p-6 rounded-2xl border border-foreground/10">
                <h3 className="font-bold mb-4">Leave a Review</h3>
                <div className="flex gap-2 mb-4">
                  <span className="text-sm font-medium">Rating:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button type="button" key={star} onClick={() => setNewRating(star)} className="focus:outline-none">
                      <Star className={`w-5 h-5 ${star <= newRating ? "text-yellow-500 fill-yellow-500" : "text-foreground/20"}`} />
                    </button>
                  ))}
                </div>
                <textarea 
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Share your experience..."
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] mb-3 text-foreground"
                />
                <button type="submit" className="px-6 py-2 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">
                  Post Review
                </button>
              </form>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-6">
            <div className="bg-background border border-foreground/10 shadow-lg p-6 rounded-3xl sticky top-24">
              <div className="flex justify-between items-center border-b border-foreground/10 pb-4 mb-6">
                <div>
                  <span className="text-sm text-foreground/50 font-bold uppercase">Price per person</span>
                  <div className="text-4xl font-black text-primary">${destination.price}</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6 text-foreground/80">
                <div className="flex justify-between">
                   <span className="font-medium">Schedule</span>
                   <span className="font-bold flex items-center gap-1"><Calendar className="w-4 h-4" /> Selected Dates</span>
                </div>
                <div className="flex justify-between">
                   <span className="font-medium">Taxes & Fees</span>
                   <span className="font-bold">$120</span>
                </div>
              </div>

              <div className="border-t border-foreground/10 pt-4 flex justify-between items-center mb-6 text-lg">
                <span className="font-bold">Total Estimate</span>
                <span className="font-black">${destination.price + 120}</span>
              </div>
              
              {reserveSuccess ? (
                <div className="w-full py-4 bg-green-500 text-white font-bold text-lg rounded-xl flex justify-center items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5" /> Reserved Successfully!
                </div>
              ) : (
                <button 
                  onClick={handleReserve}
                  disabled={isReserving}
                  className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex justify-center items-center gap-2 disabled:opacity-75"
                >
                  {isReserving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wallet className="w-5 h-5" />}
                  {isReserving ? "Processing..." : "Reserve Now"}
                </button>
              )}
            </div>
            
            {/* Related Destinations */}
            <div className="bg-foreground/5 p-6 rounded-3xl border border-foreground/10">
              <h3 className="font-bold text-lg mb-4">You might also like</h3>
              <div className="space-y-4">
                {related.map((rel) => (
                  <Link href={`/details/${rel.id}`} key={rel.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-xl bg-secondary/20 overflow-hidden relative shrink-0">
                      {rel.imageUrl && <img src={rel.imageUrl} alt={rel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />}
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-primary transition-colors text-sm line-clamp-1">{rel.name}</h4>
                      <p className="text-xs text-foreground/60 mb-1">{rel.location}</p>
                      <div className="text-primary font-bold text-sm">${rel.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
