import CallToAction from "@/components/home/cta-info/cta-info";
import Features from "@/components/home/features/features";
import Hero from "@/components/home/hero/hero";
import Testimonials from "@/components/home/testimonials/testimonials";

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
