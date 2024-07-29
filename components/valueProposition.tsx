import Image from "next/image";
import { PageHero, PageHeroDescription, PageHeroHeading } from "./page-hero";
import RentalImage from "./rentalImage";
import SaveSearchingImage from "./saveSearchingImage";

export default function ValueProposition() {
  return (
    <PageHero className="container px-5 mx-auto text-center mt-10 md:mt-5 lg:-mt-12">
      <div className="flex flex-col md:flex-row w-screen">
        <RentalImage />
        <div className="-mt-20 md:mt-20 basis-1/2">
          <PageHeroHeading className="max-w-2xl w-[80%] mb-2 text-4xl md:text-5xl font-bold leading-snug tracking-tight lg:leading-tight text-primary flex flex-row items-center justify-center mx-auto">
            Reduce Rental Searching Time by 98%
          </PageHeroHeading>

          <PageHeroDescription className="w-[80%] py-6 md:py-10 text-lg leading-snug lg:text-xl font-normal">
            Easily narrow down your options with our advanced search filters.
            Specify your requirements such as location, price range, amenities,
            and more to quickly find a place that meets your exact needs.
          </PageHeroDescription>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse w-screen md:max-h-60">
        <SaveSearchingImage />

        <div className="-mt-[50px] min-[500px]:-mt-[60px] sm:mt-0 md:-mt-14 basis-1/2">
          <PageHeroHeading className="max-w-2xl w-[80%] mb-2 text-4xl md:text-5xl font-bold leading-snug tracking-tight lg:leading-tight text-primary flex flex-row items-center justify-center mx-auto">
            Save Searching Expenses by 80%
          </PageHeroHeading>

          <PageHeroDescription className="w-[80%] py-6 md:py-10 text-lg leading-snug lg:text-xl font-normal">
            We prioritize your safety and peace of mind. All listings are
            verified by our team to ensure they meet our standards for quality
            and security. You can trust that the information provided is
            accurate and reliable.
          </PageHeroDescription>
        </div>
      </div>
    </PageHero>
  );
}
