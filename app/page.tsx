'use client';

import AudienceCount from '@/components/AudienceCount';
import EmailForm from '@/components/EmailForm';
import { Announcement } from '@/components/announcement';
import {
  PageActions,
  PageHero,
  PageHeroDescription,
  PageHeroHeading,
} from '@/components/page-hero';
import SampleProduct from '@/components/sample-product';
import { FlipWords } from '@/components/ui/flip-words';

export default function IndexPage() {
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || 'Stay tuned';
  const words = [
    'Boarding Houses',
    'Apartments',
    'Rooms',
    'Housemates',
    'Bedspaces',
    'Dormitories',
  ];

  return (
    <div className="relative mb-48 md:mb-0 h-fit">
      <div className="container">
        <PageHero>
          <Announcement />
          <PageHeroHeading>
            <FlipWords words={words} className="text-primary" /> <br />
            In One Platform
          </PageHeroHeading>
          <PageHeroDescription>{Subtitle}</PageHeroDescription>
          <PageActions className="py-16 sm:pb-0 flex flex-col gap-4">
            <AudienceCount />
            <EmailForm />
          </PageActions>
        </PageHero>
      </div>
      <SampleProduct />
    </div>
  );
}
