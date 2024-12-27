import { Rule } from 'sanity';
export const heroSection = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      title: 'smallheading',
      name: 'Smallheading',
      type: 'string',
      description: 'This will be a smaller text displayed above the big title',
      validation: (Rule: Rule) => Rule.max(120).warning(`Small heading shouldn't be more than 80 characters.`),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'This will be the main, larger title for the section',
      validation: (Rule: Rule) => Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
