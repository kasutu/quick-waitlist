import Image from "next/image"
import {
  PageHero,
  PageHeroDescription,
  PageHeroHeading,
} from '@/components/page-hero';

export default function Team() {
  const people = [
    {
      name: 'Jerome Cabugwason',
      role: 'Founder',
      imageUrl:
        '/team/jerome.jpg',
    },
    {
      name: 'Ferjen Dave Torred',
      role: 'Co-Founder',
      imageUrl:
        '/team/ferjen.jpg',
    },
    {
      name: 'Ian Clyde Tejada',
      role: 'Co-Founder',
      imageUrl:
        '/team/clyde.jpg',
    },
    {
      name: 'Chad Denard Andrada',
      role: 'Co-Founder',
      imageUrl:
        '/team/chad.jpg',
    }
  ]

  return (
    <PageHero className="max-w-7xl gap-x-8 gap-y-10 sm:gap-y-14 px-6 mb-16 w-full mt-5 md:mt-32 lg:mt-10">
      <PageHeroDescription className="text-lg leading-snug md:text-2xl font-normal mx-auto">
        We are a diverse team of young visionaries united by one goal
      </PageHeroDescription>
      <ul role="list" className="grid gap-x-6 gap-y-6 place-content-evenly md:grid-cols-2 md:gap-y-8 md:w-[85%] max-w-[850px]">
        {people.map((person) => (
          <li key={person.name} className="m-auto w-full md:w-[90%] max-w-96">
            <div className="flex items-center gap-x-6 w-72 md:w-full justify-start pointer-events-none">
              <Image className="h-20 w-20 md:h-28 md:w-28 rounded-md" height={160} width={160} src={person.imageUrl} alt="" />
              <div>
                <h3 className="text-base md:text-lg font-semibold leading-7 tracking-tight">{person.name}</h3>
                <p className="text-sm md:text-base font-semibold leading-6 text-primary">{person.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </PageHero>
  )
}
