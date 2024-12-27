import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './hero'
import { PopularBlogs } from './popularblogs'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, PopularBlogs ],
}
