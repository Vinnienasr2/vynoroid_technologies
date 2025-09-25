import { ArrowRight, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const jobOpenings = [
  {
    title: "Senior Frontend Engineer",
    location: "Nairobi, Kenya (Remote)",
    type: "Full-time",
  },
  {
    title: "Backend Developer (Python/Django)",
    location: "Nairobi, Kenya",
    type: "Full-time",
  },
  {
    title: "Software Engineering Intern",
    location: "Nairobi, Kenya",
    type: "Internship",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Join Our Team</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            We're building the future of technology in Africa. Be a part of our journey.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-headline text-3xl font-bold">Current Openings</h2>
          <div className="mt-8 grid grid-cols-1 gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.title} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                  <div>
                    <CardTitle className="font-headline text-xl">{job.title}</CardTitle>
                    <CardDescription>{job.location}</CardDescription>
                  </div>
                  <div className="flex justify-start md:justify-center">
                    <Badge>{job.type}</Badge>
                  </div>
                  <div className="flex justify-start md:justify-end">
                    <Button asChild>
                      <Link href="#">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Don't see a fit?</CardTitle>
              <CardDescription>
                We are always looking for talented individuals. Upload your CV, and we'll get in touch if a suitable role opens up.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="resume">Upload CV/Resume</Label>
                  <Input id="resume" type="file" />
                </div>
                <Button type="submit" className="w-full max-w-sm">
                  <Upload className="mr-2 h-4 w-4" /> Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
