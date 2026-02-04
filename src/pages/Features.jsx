import FeaturesHero from "../components/features/FeaturesHero";
import FeaturesCapabilities from "../components/features/FeaturesCapabilities";
import FeaturesInsight from "../components/features/FeaturesInsight";
import FeaturesTabs from "../components/features/features-tabs";
import FaqSection from "../components/features/FaqSection";
import Testimonials from "../components/features/Testimonials";


export default function Features() {
  return (
    <>
      <FeaturesHero />
        <FeaturesCapabilities />
        <FeaturesInsight />
        <FeaturesTabs />
        <FaqSection />
        <Testimonials />
        
    </>
  );
}
