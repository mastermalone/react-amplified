// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Author, UserComment } = initSchema(schema);

export {
  Post,
  Author,
  UserComment
};