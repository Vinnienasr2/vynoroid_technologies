'use client';

import { useState } from 'react';
import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Layers3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS, COMPANY_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
          <Layers3 className="mr-2 h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">{COMPANY_NAME}</span>
        </MobileLink>
        <div className="my-8 flex flex-col gap-4 pl-6 text-lg">
          {NAV_LINKS.map((item) => (
            <MobileLink key={item.href} href={item.href} onOpenChange={setOpen}>
              {item.label}
            </MobileLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn('transition-colors hover:text-foreground/80 text-foreground/70', className)}
      {...props}
    >
      {children}
    </Link>
  );
}
