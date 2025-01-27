import React from "react";
import LandingHeroSection from "@components/landing-page/LandingHeroSection";
import LandingResearchSection from "@components/landing-page/LandingResearchSection";
import LandingSolutionSection from "@components/landing-page/LandingSolutionSection";
import LandingLearnSection from "@components/landing-page/LandingLearnSection";
import LandingCommunitySection from "@components/landing-page/LandingCommunitySection";
export default function Home() {
  return (
  <>
  <LandingHeroSection/>
  <LandingResearchSection/>
  <LandingSolutionSection/>
  <LandingLearnSection/>
  <LandingCommunitySection/>
  </>
  );
}
