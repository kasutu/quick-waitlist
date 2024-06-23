import Image from 'next/image';
import Speaker from '/public/speaker.svg';
import { CardTitle, CardDescription } from './ui/card';
import Link from 'next/link';

export function Header() {
  // Data from env
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || 'We are coming Soon';
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || 'Stay tuned';
  const siteLogo = process.env.NEXT_PUBLIC_LOGO || Speaker;
  const [firstWord, secondWord, ...restOfWords] = Title.split(' ');
  const animatedTitle = [firstWord, secondWord].join(' ');
  const restOfString = restOfWords.join(' ');

  return (
    <div className="min-w-full">
      <div className="flex justify-center items-center h-20 md:h-28 relative scale-[35%]">
        <Image
          src={siteLogo}
          alt="white square silid"
          width={500}
          height={500}
        />
      </div>
      <div className="text-center mb-4 lg:mb-6 space-y-4 lg:space-y-6">
        <CardTitle className="text-4xl md:text-[55px] font-semibold leading-none md:leading-tight text-primary">
          <span className="gradient-text text-transparent animate-gradient">
            {animatedTitle}
          </span>
          <div>{restOfString}</div>
        </CardTitle>
        <CardDescription className="text-lg md:text-[26px] font-normal">
          {Subtitle} <br />
          <Link href={"/about-us"}>
            <span className='text-2xl leading-6 cursor-pointer font-semibold text-indigo-300'>
              Learn more about us &rarr;
            </span>
          </Link>
        </CardDescription>
      </div>
    </div>
  );
}
