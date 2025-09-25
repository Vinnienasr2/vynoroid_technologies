import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Briefcase, Code, Server, Shield, Smartphone, Star, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FOUNDER_NAME } from '@/lib/constants';
import placeholderImages from '@/lib/placeholder-images.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const services = [
  { icon: Code, title: 'Web Development', description: 'Crafting responsive, high-performance websites tailored to your business needs.' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Building intuitive and powerful mobile applications for both Android & iOS platforms.' },
  { icon: BrainCircuit, title: 'AI Solutions', description: 'Leveraging artificial intelligence to create smart solutions that drive growth.' },
  { icon: Server, title: 'Enterprise Systems', description: 'Developing robust, scalable enterprise systems to streamline your operations.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Protecting your digital assets with state-of-the-art security measures.' },
  { icon: Users, title: 'IT Consultancy', description: 'Providing expert guidance to align your technology strategy with your business goals.' },
];

const testimonials = [
  { name: 'John Doe', company: 'Tech Innovators', feedback: 'Vynoroid Technologies delivered beyond our expectations. Their professionalism and technical expertise are unmatched.', avatar: placeholderImages.avatars[0].imageUrl, hint: placeholderImages.avatars[0].imageHint },
  { name: 'Jane Smith', company: 'Creative Solutions', feedback: 'The mobile app they developed for us has been a game-changer. Highly recommend their team!', avatar: placeholderImages.avatars[1].imageUrl, hint: placeholderImages.avatars[1].imageHint },
  { name: 'Samuel Lee', company: 'Enterprise Hub', feedback: 'A truly reliable partner for enterprise software development. They understood our complex requirements perfectly.', avatar: placeholderImages.avatars[2].imageUrl, hint: placeholderImages.avatars[2].imageHint },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServiceShowcase />
      <FounderProfile />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-6">
            <Badge variant="outline" className="py-1 px-3 bg-accent text-accent-foreground">
              Software Development in Kenya
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Building the Future of Software, Today.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
              From innovative mobile apps to scalable enterprise systems, Vynoroid Technologies is your trusted partner in digital transformation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">Get a Proposal</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src={placeholderImages.hero.imageUrl}
              alt="Digital innovation"
              data-ai-hint={placeholderImages.hero.imageHint}
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceShowcase() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Expertise</h2>
            <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide a comprehensive suite of software development services to bring your vision to life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderProfile() {
  return (
    <section className="w-full py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Founder</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Vynoroid Technologies was founded by {FOUNDER_NAME}, a visionary software engineer with a passion for leveraging technology to solve real-world problems in Kenya and beyond.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed">
              His leadership and commitment to excellence drive our team to deliver outstanding results and build lasting partnerships with our clients.
            </p>
            <Button asChild variant="link" className="px-0 text-lg font-semibold">
              <Link href="/about">Learn more about our story <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative h-80 w-80">
              <Image
                src={placeholderImages.founder.imageUrl}
                alt={FOUNDER_NAME}
                data-ai-hint={placeholderImages.founder.imageHint}
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">What Our Partners Say</h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed">
            We are proud to have collaborated with amazing companies. Here's what they think about us.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between">
                    <CardHeader>
                       <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="font-headline text-lg">{testimonial.name}</CardTitle>
                            <CardDescription>{testimonial.company}</CardDescription>
                          </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">"{testimonial.feedback}"</p>
                    </CardContent>
                    <div className="flex items-center p-6 pt-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Your Project?</h2>
          <p className="mx-auto max-w-xl text-primary-foreground/80 md:text-xl">
            Let's discuss how Vynoroid Technologies can help you achieve your business goals.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <Link href="/contact">
              Contact Us Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
