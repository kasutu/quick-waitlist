import {
  PageHero,
  PageHeroDescription,
  PageHeroHeading,
} from '@/components/page-hero';

export default function Vision() {
  return (
    <PageHero className="container px-5 py-12 mx-auto text-center">
      <PageHeroHeading className="max-w-2xl mt-3 mb-10 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl text-gray-800 dark:text-white flex flex-row items-center justify-center mx-auto">What we believe
      </PageHeroHeading>

      <PageHeroDescription className="max-w-lg py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-500 dark:text-gray-300 mx-auto">
        Massa ultricies mi quis hendrerit dolor magna eget est. Sit amet nisl purus in. Elementum integer enim neque volutpat ac tincidunt. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Purus ut faucibus pulvinar elementum integer enim.
      </PageHeroDescription>
    </PageHero>
  )
}