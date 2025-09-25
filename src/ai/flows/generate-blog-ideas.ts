'use server';

/**
 * @fileOverview Generates blog post ideas related to tech trends, software development, AI, cybersecurity, and industry updates.
 *
 * - generateBlogIdeas - A function that generates blog post ideas.
 * - GenerateBlogIdeasInput - The input type for the generateBlogIdeas function.
 * - GenerateBlogIdeasOutput - The return type for the generateBlogIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogIdeasInputSchema = z.object({
  topic: z
    .string()
    .describe(
      'The general topic for the blog post ideas, e.g., tech trends, software development, AI, cybersecurity, or industry updates.'
    ),
  keywords: z
    .string()
    .optional()
    .describe(
      'Optional keywords to guide the blog post idea generation. Comma separated string is acceptable.'
    ),
  numIdeas: z
    .number()
    .default(3)
    .describe('The number of blog post ideas to generate.'),
});
export type GenerateBlogIdeasInput = z.infer<typeof GenerateBlogIdeasInputSchema>;

const GenerateBlogIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of blog post ideas.'),
});
export type GenerateBlogIdeasOutput = z.infer<typeof GenerateBlogIdeasOutputSchema>;

export async function generateBlogIdeas(input: GenerateBlogIdeasInput): Promise<GenerateBlogIdeasOutput> {
  return generateBlogIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogIdeasPrompt',
  input: {schema: GenerateBlogIdeasInputSchema},
  output: {schema: GenerateBlogIdeasOutputSchema},
  prompt: `You are a marketing manager who is very creative at writing blog posts.

  Generate {{numIdeas}} blog post ideas related to {{topic}}.  These blog posts should be engaging to the reader and be helpful.
  Here are some optional keywords to guide the blog post idea generation: {{keywords}}.

  The output should be an array of blog post ideas.
  Example output: { ideas: [ \"Blog Post Idea 1\", \"Blog Post Idea 2\", \"Blog Post Idea 3\" ] }
  Ensure the output is valid JSON.
  `,
});

const generateBlogIdeasFlow = ai.defineFlow(
  {
    name: 'generateBlogIdeasFlow',
    inputSchema: GenerateBlogIdeasInputSchema,
    outputSchema: GenerateBlogIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
