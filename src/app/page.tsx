import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SignatureServices } from "@/components/home/SignatureServices";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { BeforeAfterPreview } from "@/components/home/BeforeAfterPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CostEstimatorTeaser } from "@/components/home/CostEstimatorTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { HOME_FAQS } from "@/data/faqs";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/next"
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SignatureServices />
      <FeaturedProjects />
      <BeforeAfterPreview />
      <HowItWorks />
      <CostEstimatorTeaser />
      <Testimonials />
      <FAQ items={HOME_FAQS} />
      <ConsultationCTA />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
