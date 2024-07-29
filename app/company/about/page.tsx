import Team from "@/components/team";
import Motivation from "@/components/motivation";
import ValueProposition from "@/components/valueProposition";

import { PageHero, PageHeroHeading } from "@/components/page-hero";

import Image from "next/image";
import MapImage from "@/components/mapImage";

export default function AboutUs() {
  return (
    <>
      <PageHero className="mx-auto xl:px-0 flex w-full flex-col items-center justify-center text-center gap-12 mb-10 lg:-mb-16">
        <PageHeroHeading>
          We Revolutionize Rental Housing, suiting to individual needs.
        </PageHeroHeading>

        <MapImage />
      </PageHero>

      <Motivation />

      <ValueProposition />

      <Team />
    </>
  );
}
