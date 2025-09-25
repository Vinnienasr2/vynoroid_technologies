'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/common/Logo';
import { MobileNav } from './MobileNav';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Logo />
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium ml-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden sm:flex">
            <Link href="/contact">Get a Proposal</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
