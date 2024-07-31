import { useState, useEffect, useTransition } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function AudienceCount() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState<number>(6);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await fetch('/api/resend', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          const data = await res.json();
          setCount(data.audienceCount); // Assuming the API returns an object with an 'audienceCount' property
        } else {
          console.error('AudienceCount Error:', res.status, res.statusText);
        }
      } catch (error) {
        console.error('AudienceCount Fetch error:', error);
      }
    });
  }, [startTransition]);

  return (
    <div className="inline-flex items-center rounded-lg bg-muted px-1 py-1 text-sm">
      <div className="flex -space-x-2">
        <Avatar className="border border-muted w-auto h-6">
          <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=Milo&backgroundType=gradientLinear&backgroundColor=ffdfbf,ffd5dc,d1d4f9,c0aede,b6e3f4" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <Avatar className="border border-muted w-auto h-6">
          <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=Gizmo&backgroundType=solid,gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf" />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <Avatar className="border border-muted w-auto h-6">
          <AvatarImage src="https://api.dicebear.com/9.x/notionists/svg?seed=Jasper&backgroundType=solid,gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </div>
      <span className="flex gap-1 mr-2">
        <p className="font-bold">{`+${(count as number) - 3}`}</p>
        subscribers
      </span>
    </div>
  );
}
