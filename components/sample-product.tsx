'use client';

import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';

export default function SampleProduct() {
  return (
    <AspectRatio className="h-fit w-screen -z-50 pt-32 sm:pt-96 lg:pt-0 pointer-events-none">
      <Image
        src={'/major-features.png'}
        alt="major features"
        width={1474}
        height={1474}
        className="scale-[175%] md:scale-95 w-full"
        priority
      />
    </AspectRatio>
  );
}
