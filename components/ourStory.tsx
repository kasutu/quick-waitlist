import Image from "next/image";

export default function OurStory() {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:py-32">
      <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-12 md:pt-24 lg:flex lg:gap-x-20 lg:px-16 lg:pt-0">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Story</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            It&apos;s been a year since we had the problem and this crazy idea. We are tired of finding apartments/boarding houses near our school. It&apos;s always unsatisfactory for our taste, and it takes a long time and a lot of energy to find the perfect one. We thought we were the only ones who had this problem.
          </p>
          <br />
          <p className="text-lg leading-8 text-gray-300">
            Turns out we are not alone. We read a lot of FB group posts and observed that finding your preferred living space requires a lot of time, like months of walking, searching, and waiting for someone to post in the FB groups about that one perfect room. It&apos;s frustrating when the next morning it&apos;s already taken. Some of us want to know the location, if it is near, if it has air conditioning, and if it has a nice ambiance.
          </p>
          <br />
          <p className="text-lg leading-8 text-gray-300">
            So we asked ourselves, what if we make a website? After a year of struggling with essential core features, identifying the problem, and defining use cases, we found out users need security, convenience, and preference.
          </p>
        </div>
      </div>
    </div>
  )
}