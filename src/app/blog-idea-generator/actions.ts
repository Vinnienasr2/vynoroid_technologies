'use server';

import { generateBlogIdeas, type GenerateBlogIdeasOutput } from '@/ai/flows/generate-blog-ideas';
import { z } from 'zod';

const BlogIdeaFormSchema = z.object({
  topic: z.string().min(1, { message: 'Topic is required.' }),
  keywords: z.string().optional(),
  numIdeas: z.coerce.number().min(1, 'Please generate at least one idea.').max(10, 'You can generate a maximum of 10 ideas.'),
});

export type State = {
  errors?: {
    topic?: string[];
    keywords?: string[];
    numIdeas?: string[];
  };
  message?: string | null;
  data?: GenerateBlogIdeasOutput | null;
};

export async function createBlogIdeas(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = BlogIdeaFormSchema.safeParse({
    topic: formData.get('topic'),
    keywords: formData.get('keywords'),
    numIdeas: formData.get('numIdeas'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to generate ideas. Please check your input.',
    };
  }
  
  try {
    const result = await generateBlogIdeas(validatedFields.data);
    return { data: result, message: 'Successfully generated ideas.' };
  } catch (error) {
    console.error('Error generating blog ideas:', error);
    return {
      message: 'An unexpected error occurred while communicating with the AI. Please try again later.',
    };
  }
}
