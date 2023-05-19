import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../prisma/db";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schema";

export type Context = {
  prisma: PrismaClient;
};

const apolloServer = new ApolloServer<Context>({ resolvers, typeDefs });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
