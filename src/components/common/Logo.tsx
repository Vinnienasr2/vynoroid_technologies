import Link from 'next/link';
import { Layers3 } from 'lucide-react';
import { COMPANY_NAME } from '@/lib/constants';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <Layers3 className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
      <span className="text-xl font-semibold text-foreground font-headline hidden sm:inline-block">
        {COMPANY_NAME}
      </span>
    </Link>
  );
}
