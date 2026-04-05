import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import PopularDestinations from "@/components/landing/PopularDestinations";
import Categories from "@/components/landing/Categories";
import Testimonials from "@/components/landing/Testimonials";
import Stats from "@/components/landing/Stats";
import BlogPreview from "@/components/landing/BlogPreview";
import FAQ from "@/components/landing/FAQ";
import Newsletter from "@/components/landing/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PopularDestinations />
      <Categories />
      <Testimonials />
      <Stats />
      <BlogPreview />
      <FAQ />
      <Newsletter />
    </>
  );
}
