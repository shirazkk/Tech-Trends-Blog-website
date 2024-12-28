export const commentSchema = {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'content',
        title: 'Content',
        type: 'string',
        description: 'The content of the comment',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        description: 'When the comment was created',
        options: {
          default: new Date().toISOString(), // Automatically sets the current date
        },
      },
    ],
  };
  