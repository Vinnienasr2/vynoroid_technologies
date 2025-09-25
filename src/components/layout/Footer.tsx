import Link from 'next/link';
import { Facebook, Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_EMAIL, WHATSAPP_LINK, COMPANY_NAME, WHATSAPP_NUMBER } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialIcons: { [key: string]: React.ReactNode } = {
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    github: <Github className="h-5 w-5" />,
  };

  return (
    <footer className="bg-card/50 text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {COMPANY_NAME} is your partner in digital innovation. We build software that matters.
            </p>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">{social.name}</span>
                  {socialIcons[social.name]}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-3 lg:grid-cols-3">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                <div key={title}>
                    <p className="font-headline font-medium">{title}</p>
                    <ul className="mt-6 space-y-4 text-sm">
                        {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-muted-foreground transition hover:text-foreground">
                            {link.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
            <div>
              <p className="font-headline font-medium">Contact Us</p>
              <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{CONTACT_EMAIL}</span>
                    </a>
                  </li>
                  <li>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{WHATSAPP_NUMBER}</span>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
