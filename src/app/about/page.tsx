import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FOUNDER_NAME } from "@/lib/constants";
import placeholderImages from '@/lib/placeholder-images.json';

const coreValues = [
  "Innovation",
  "Integrity",
  "Customer Centricity",
  "Collaboration",
  "Excellence",
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">About Vynoroid Technologies</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Pioneering digital solutions from the heart of Kenya to the global stage.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To empower businesses and communities through innovative, reliable, and accessible software solutions, fostering growth and driving technological advancement in Africa.
            </p>
            <h2 className="mt-8 font-headline text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              To be a leading technology partner in Africa, recognized for our commitment to quality, integrity, and transformative impact.
            </p>
          </div>
          <div className="flex justify-center items-center">
             <Image
                src="https://picsum.photos/seed/about1/500/350"
                alt="Our team collaborating"
                data-ai-hint="team collaboration"
                width={500}
                height={350}
                className="rounded-lg shadow-xl"
              />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center font-headline text-3xl font-bold">Our Core Values</h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {coreValues.map((value) => (
              <div key={value} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <p className="mt-4 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
           <div className="flex justify-center items-center">
             <Image
                src={placeholderImages.founder.imageUrl}
                alt={FOUNDER_NAME}
                data-ai-hint={placeholderImages.founder.imageHint}
                width={350}
                height={350}
                className="rounded-full object-cover shadow-2xl"
              />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold">Founder’s Story & Leadership</h2>
            <p className="mt-4 text-muted-foreground">
              {FOUNDER_NAME}, a passionate software engineer from Kenya, founded Vynoroid Technologies with a singular vision: to build a world-class technology company that could compete on a global scale while nurturing local talent. His journey began with a deep fascination for technology's potential to solve pressing challenges. Today, his leadership inspires our team to push boundaries and deliver excellence in every project. His expertise in software architecture and dedication to client success are the cornerstones of our company's philosophy.
            </p>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link href="/contact">Connect with our team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
