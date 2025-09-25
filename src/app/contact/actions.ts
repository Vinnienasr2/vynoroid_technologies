'use server';

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export type ContactFormState = {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function handleContactForm(prevState: ContactFormState, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
      success: false,
    };
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just simulate a successful submission
  console.log('Contact form submitted:', validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You can uncomment the line below to test error handling
  // return { message: 'Failed to send message.', success: false };

  return {
    message: 'Message sent successfully!',
    success: true,
  };
}
