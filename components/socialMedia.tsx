import Image from 'next/image';
import Link from 'next/link';
import Github from '/public/github.svg';
import Linkedin from '/public/linkedin.svg';
import Twitter from '/public/twitter.svg';

export function SocialMedia() {
  const LinkedinLink =
    process.env.NEXT_PUBLIC_LINKEDIN || 'https://www.linkedin.com/';
  const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || 'https://www.x.com/';
  const GithubLink =
    process.env.NEXT_PUBLIC_GITHUB || 'https://www.github.com/';

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <Link href={LinkedinLink} className="relative w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]">
        <Image src={Linkedin} alt="Linkedin" fill />
      </Link>
      <Link href={TwitterLink} className="relative w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]">
        <Image src={Twitter} alt="Twitter" fill />
      </Link>
      <Link href={GithubLink} className="relative w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]">
        <Image src={Github} alt="Github" fill />
      </Link>
    </div>
  );
}
