import { Mail, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/constants';
import { ContactForm } from './components/contact-form';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email Us',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    value: WHATSAPP_NUMBER,
    href: WHATSAPP_LINK,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Nairobi, Kenya',
    href: '#',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold">Get in Touch</h2>
            {contactDetails.map((detail) => (
              <a key={detail.title} href={detail.href} target={detail.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <detail.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{detail.title}</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">{detail.value}</p>
                </div>
              </a>
            ))}
            <div className="h-80 w-full rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585373746!2d36.70735319808606!3d-1.302860274291882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1679509639535!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location in Nairobi, Kenya"
              ></iframe>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
