
import { createClient } from '@sanity/client';

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production'
});

export default client;
