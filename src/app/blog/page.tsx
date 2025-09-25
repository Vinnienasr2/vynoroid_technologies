import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';
import { FOUNDER_NAME } from '@/lib/constants';

const blogPosts = [
  {
    title: "The Future of Web Development: 5 Trends to Watch in 2024",
    category: "Web Development",
    excerpt: "From AI-powered code assistants to the rise of serverless architectures, discover the trends shaping the future of web development.",
    author: FOUNDER_NAME,
    date: "October 26, 2023",
    image: placeholderImages.blog[0].imageUrl,
    imageHint: placeholderImages.blog[0].imageHint,
    slug: "/blog/post-1",
  },
  {
    title: "A Practical Guide to Cybersecurity for Small Businesses in Kenya",
    category: "Cybersecurity",
    excerpt: "Small businesses are prime targets for cyberattacks. Learn practical steps you can take to protect your data and your customers.",
    author: "Jane Doe, Security Expert",
    date: "October 15, 2023",
    image: placeholderImages.blog[1].imageUrl,
    imageHint: placeholderImages.blog[1].imageHint,
    slug: "/blog/post-2",
  },
  {
    title: "How AI is Transforming the Agricultural Sector in Africa",
    category: "AI",
    excerpt: "Artificial intelligence is no longer science fiction. Explore how AI-driven solutions are boosting crop yields and improving food security across the continent.",
    author: FOUNDER_NAME,
    date: "September 30, 2023",
    image: placeholderImages.blog[2].imageUrl,
    imageHint: placeholderImages.blog[2].imageHint,
    slug: "/blog/post-3",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Blog & Insights</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Stay updated with the latest in technology, software development, and industry trends from our experts.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <Link href={post.slug} className="block">
                <CardHeader className="p-0">
                  <div className="relative h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      data-ai-hint={post.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
              </Link>
              <CardContent className="p-6 flex-grow">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <CardTitle className="font-headline text-xl leading-tight">
                  <Link href={post.slug}>{post.title}</Link>
                </CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.author === FOUNDER_NAME ? placeholderImages.founder.imageUrl : placeholderImages.avatars[1].imageUrl} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
                <Link href={post.slug} className="text-primary hover:underline flex items-center text-sm font-semibold">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
