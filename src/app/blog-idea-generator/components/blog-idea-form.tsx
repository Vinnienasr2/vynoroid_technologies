'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { createBlogIdeas } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  topic: z.string().min(1, { message: 'Please select a topic.' }),
  keywords: z.string().optional(),
  numIdeas: z.coerce.number().min(1).max(10).default(3),
});

type FormData = z.infer<typeof formSchema>;

const initialState = {
  message: null,
  data: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Ideas
    </Button>
  );
}

const topics = [
  { value: "tech trends", label: "Tech Trends" },
  { value: "software development", label: "Software Development" },
  { value: "AI", label: "Artificial Intelligence" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "industry updates", label: "Industry Updates" },
];

export function BlogIdeaForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(createBlogIdeas, initialState);
  const [ideas, setIdeas] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      keywords: '',
      numIdeas: 3,
    },
  });

  useEffect(() => {
    if (state.message && !state.data) {
      toast({
        variant: 'destructive',
        title: 'Error Generating Ideas',
        description: state.message,
      });
    }
    if (state.data?.ideas) {
      setIdeas(state.data.ideas);
    }
  }, [state, toast]);

  return (
    <div>
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form
              ref={formRef}
              action={formAction}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic for your blog" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {topics.map((topic) => (
                          <SelectItem key={topic.value} value={topic.value}>
                            {topic.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Optional Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Next.js, Server Components, Kenya" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numIdeas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Ideas</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton />
            </form>
          </Form>
        </CardContent>
      </Card>
      {ideas.length > 0 && (
        <div className="mt-8">
            <h3 className="font-headline text-2xl font-bold mb-4">Generated Ideas</h3>
            <ul className="space-y-4">
            {ideas.map((idea, index) => (
                <li key={index}>
                    <Card>
                        <CardContent className="p-4">
                            <p>{idea}</p>
                        </CardContent>
                    </Card>
                </li>
            ))}
            </ul>
        </div>
      )}
    </div>
  );
}
