import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'nested', of: AuthorProperties, required: true },
    image: { type: 'string', required: true },
    tags: { type: 'string', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/articles/${post._raw.flattenedPath.split('/').pop()}`
    },
    locale: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/')[0]
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').pop()
    }
  }
}));

const AuthorProperties = defineNestedType(() => ({
  name: 'AuthorProperties',
  fields: {
    name: { type: 'string', required: true },
    link: { type: 'string', required: false },
    avatar: { type: 'string', required: false },
    username: { type: 'string', required: false }
  }
}));

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] });
