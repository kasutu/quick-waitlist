import Speaker from '/public/speaker.svg';

import HeroPage from '@/components/heroPage';
import OurStory from '@/components/ourStory';
import AboutUs from '@/components/aboutUs';

export default function Home() {
  const siteLogo = process.env.NEXT_PUBLIC_LOGO || Speaker;

  return (
    <>
      {/* Ga error ang siteLogo idk what to do with it */}
      {/* <div className="flex justify-center items-center h-20 md:h-28 relative scale-[35%]">
        <Image
          src={siteLogo}
          alt="white square silid"
          width={500}
          height={500}
        />
      </div> */}

      <HeroPage />
      <OurStory />
      <AboutUs />
    </>
  );
}