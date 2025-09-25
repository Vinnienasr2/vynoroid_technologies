import { Lightbulb } from 'lucide-react';
import { BlogIdeaForm } from './components/blog-idea-form';

export default function BlogIdeaGeneratorPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Lightbulb className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
              Blog Post Idea Generator
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Feeling stuck? Use our AI-powered tool to generate creative blog post ideas for your tech blog.
            </p>
          </div>
          <BlogIdeaForm />
        </div>
      </div>
    </div>
  );
}
