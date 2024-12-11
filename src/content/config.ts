import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      author: reference("authors"),
      cover: image(),
      tags: z.string().array(),
    }),
});

const authorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatar: z.string().url(),
  }),
});

export const collections = {
  blogs: blogCollection,
  authors: authorsCollection,
};
