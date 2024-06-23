import { Footer } from '@/components/footer';
import EmailForm from '@/components/EmailForm';

export default function HeroPage() {
  const Title = process.env.NEXT_PUBLIC_HERO_TITLE || 'We are coming Soon';
  const Subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE || 'Stay tuned';
  const [firstWord, secondWord, ...restOfWords] = Title.split(' ');
  const animatedTitle = [firstWord, secondWord].join(' ');
  const restOfString = restOfWords.join(' ');

  return (
    <div className="relative px-4 py-28 mx-auto h-fit min-h-[700px] sm:min-h-dvh w-full md:px-24 lg:px-8 sm:py-16 lg:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <div className="max-w-xl mb-16 md:mx-auto text-left sm:text-center sm:max-w-2xl sm:mb-12">
            <h2 className="max-w-2xl mb-6 font-sans text-5xl lg:text-6xl font-bold leading-none tracking-tight md:mx-auto ">
              <span className="gradient-text text-transparent animate-gradient">
                {animatedTitle}
              </span>
              <div>{restOfString}</div>
            </h2>
            <p className="text-lg lg:text-xl font-light">
              {Subtitle}
            </p>
          </div>
          <EmailForm />
        </div>
      </div>
      <div className='absolute bottom-4 left-0 right-0'>
        <Footer />
      </div>
    </div>
  )
}