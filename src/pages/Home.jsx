import React from "react";
import HomeHero from "../components/HomeHero";
import AiPlatformSection from "../components/AiPlatformSection";
import FeaturesGrid from "../components/FeaturesGrid";
import AiSolutionsSection from "../components/AiSolutionsSection";
import SubtitleStrip from "../components/SubtitleStrip";
import UseCasesSection from "../components/UseCasesSection";
import IntegrationSection from "../components/IntegrationSection";
import AlgorithmSection from "../components/AlgorithmSection";
import FeaturedBlogSection from "../components/FeaturedBlogSection";

const Home = () => {
  return (
    <>
      {/* ONLY HomeHero needs horizontal clipping */}
      <div className="relative w-full overflow-x-clip">
        <HomeHero />
      </div>

      {/* Rest of sections – NO overflow restriction */}
      <AiPlatformSection />
      <FeaturesGrid />
      <AiSolutionsSection />
      <SubtitleStrip />
      <UseCasesSection />
      <IntegrationSection />
      <AlgorithmSection />
      <FeaturedBlogSection />
    </>
  );
};

export default Home;
