import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './hero'
import { PopularBlogs } from './popularblogs'
import { commentSchema } from './comment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, PopularBlogs ,commentSchema],
}
