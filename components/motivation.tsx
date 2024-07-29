import {
  PageHero,
  PageHeroDescription,
  PageHeroHeading,
} from '@/components/page-hero';

export default function Motivation() {
  return (
    <PageHero className="container px-5 mx-auto text-center">
      <PageHeroHeading className="max-w-2xl mb-2 text-5xl md:text-5xl font-bold leading-snug tracking-tight lg:leading-tight text-primary flex flex-row items-center justify-center mx-auto">
        OUR STORY
      </PageHeroHeading>

      <PageHeroDescription className="py-2 text-lg leading-snug lg:text-xl font-normal">
        Silid.ph started as an idea in 2023. We were frustrated by how hard it was to find apartments or boarding houses near our school and work.
        <br /><br />
        As we started to dig deeper, it became clear that this was just the tip of the iceberg. We realized that finding a space that suits the renter was the biggest issue, so we improved our current ways.
        <br /><br />
        In 2024 we announced a home rental platform and get the team to work. We are creating something cozy here, and we&apos;re excited to build it for you.
      </PageHeroDescription>
    </PageHero>
  )
}