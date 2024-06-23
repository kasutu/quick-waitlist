'use client';
import React, { useTransition } from 'react';
import Mail from '/public/mail.svg';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

const EmailForm = () => {
  const [isPending, startTransaction] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const email = form.get('email');
    if (!email) {
      return null;
    }

    startTransaction(async () => {
      try {
        const res = await fetch('/api/resend', {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          target.reset();
          toast({
            title: 'Thank you for subscribing 🎉',
          });
        } else {
          console.error('Error:', res.status, res.statusText);
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          });
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grid grid-cols-1 sm:flex sm:justify-center sm:items-center gap-2 m-auto max-w-[400px] sm:max-w-full"
    >
      <div className="relative ">
        <label
          htmlFor="email"
          className="absolute inset-y-0 left-0 pl-2.5 flex items-center"
        >
          <Image src={Mail} alt="mail" />
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Join our waiting list..."
          className="lg:w-[300px] py-2 px-3 text-base pl-8"
        />
      </div>

      <Button disabled={isPending} type="submit" className=''>
        Subscribe
      </Button>
    </form>
  );
};

export default EmailForm;
