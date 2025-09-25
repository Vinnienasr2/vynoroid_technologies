import { BrainCircuit, Briefcase, Code, Server, Shield, Smartphone, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "We build beautiful, responsive, and high-performance websites and web applications using modern technologies. From corporate sites to complex e-commerce platforms, we deliver solutions that engage users and drive results."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Our team creates intuitive and feature-rich mobile applications for both Android and iOS. We handle the entire lifecycle, from ideation and design to development, deployment, and maintenance."
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Unlock the power of your data with our AI and machine learning solutions. We develop custom models for predictive analytics, natural language processing, computer vision, and more to give you a competitive edge."
  },
  {
    icon: Server,
    title: "Cloud & DevOps Services",
    description: "We help you leverage the cloud for scalability, and reliability. Our DevOps practices ensure continuous integration and delivery (CI/CD), automating your workflow for faster and more efficient deployments."
  },
  {
    icon: Shield,
    title: "Cybersecurity & Data Protection",
    description: "Protect your digital assets with our comprehensive cybersecurity services. We offer vulnerability assessments, penetration testing, security audits, and data protection strategies to keep your systems secure."
  },
  {
    icon: Users,
    title: "IT Consultancy",
    description: "Our expert consultants provide strategic guidance to help you navigate the complex tech landscape. We assist with technology roadmaps, digital transformation strategies, and IT infrastructure planning to ensure your investments are sound."
  },
  {
    icon: Briefcase,
    title: "Custom Software Solutions",
    description: "When off-the-shelf software doesn't fit, we build custom solutions tailored to your unique business processes. We work closely with you to understand your needs and deliver software that works for you."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            A complete suite of technology services designed to elevate your business.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
