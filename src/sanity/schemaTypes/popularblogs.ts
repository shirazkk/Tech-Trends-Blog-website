import { Rule } from 'sanity';
export const PopularBlogs = {
    name: 'popularblogs',
    title: 'Popularblogs',
    type: 'document',
    fields: [
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Set the order of this blog. Lower numbers will appear first.',
            validation: (Rule:Rule) => Rule.required().min(1),
          },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Upload an image for the content item.',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            title: 'category',
            name: 'Category',
            type: 'string',
            description: 'category of blog',
            validation: (Rule: Rule) => Rule.required()
        },

        {
            name: 'date',
            title: 'Date',
            type: 'date',
            description: 'Set the date for the content item.',
            validation: (Rule: Rule) => Rule.required(),
        },

        {
            name: 'tittle',
            title: 'Tittle',
            type: 'string',
            description: 'Enter the tittle of the content item.',
            validation: (Rule: Rule) => Rule.required().max(120).warning('A title should be concise and no more than 120 characters.'),
        },

        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'This will be used to create a URL-friendly identifier for this content.',
            options: {
                source: 'tittle',
                maxLength: 96,
            }
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        },

        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Write a description for the blog.',
            validation: (Rule: Rule) => Rule.required()
        },
    ],
};
