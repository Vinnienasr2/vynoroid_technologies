import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web",
    description: "A full-featured e-commerce platform with a custom CMS, payment gateway integration, and advanced product search.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    image: placeholderImages.portfolio[0].imageUrl,
    imageHint: placeholderImages.portfolio[0].imageHint,
  },
  {
    title: "Logistics Mobile App",
    category: "Mobile",
    description: "A cross-platform mobile app for a logistics company to track shipments, manage drivers, and optimize routes.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    image: placeholderImages.portfolio[1].imageUrl,
    imageHint: placeholderImages.portfolio[1].imageHint,
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI",
    description: "A dashboard that uses machine learning to predict sales trends and provide actionable insights from business data.",
    tech: ["Python", "Flask", "React", "D3.js"],
    image: placeholderImages.portfolio[2].imageUrl,
    imageHint: placeholderImages.portfolio[2].imageHint,
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    category: "Enterprise",
    description: "A custom ERP system for a manufacturing company to manage inventory, production, and supply chain operations.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    image: placeholderImages.portfolio[3].imageUrl,
    imageHint: placeholderImages.portfolio[3].imageHint,
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Our Work</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            A selection of projects that showcase our expertise and commitment to quality.
          </p>
        </div>
        
        {/* Filtering would be implemented here in a real application with state */}
        <div className="flex justify-center gap-2 mt-8">
            <Button variant="ghost">All</Button>
            <Button variant="ghost">Web</Button>
            <Button variant="ghost">Mobile</Button>
            <Button variant="ghost">AI</Button>
            <Button variant="ghost">Enterprise</Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
