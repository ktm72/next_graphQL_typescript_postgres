import { Context } from "@/pages/api/graphql";
export const resolvers = {
  Query: {
    novels: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findMany();
    },
    novel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    authors: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.findMany();
    },
    author: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  //get author in novels query
  Novel: {
    author: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
  },
  //get novels in author query
  Author: {
    novels: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findMany({
        where: {
          authorId: parent.id,
        },
      });
    },
  },
  // update, create , delete
  Mutation: {
    //Novel
    addNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.create({
        data: {
          title: args.title,
          image: args.image,
          authorId: args.authorId,
        },
      });
    },
    updateNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          image: args.image,
        },
      });
    },
    deleteNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.delete({
        where: {
          id: args.id,
        },
      });
    },
    //Author
    addAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.create({
        data: {
          name: args.name,
        },
      });
    },
    updateAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
        },
      });
    },
    deleteAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};
