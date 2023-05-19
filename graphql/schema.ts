export const typeDefs = `#graphql
type Query {
    novel(id: ID): Novel
    novels: [Novel]
    authors: [Author]
    author(id: ID): Author
}

type Author {
  id: ID!
  name: String
  role: String
  novels: [Novel]
}

type Novel {
  id: ID!
  title: String
  image: String
  createdAt: String
  updatedAt: String
  authorId: String
  author: Author
}

type Mutation {
    addNovel (image:String, title:String, authorId:ID) : Novel
    updateNovel(id:ID!, title:String, image:String) : Novel
    deleteNovel(id:ID!) : Novel
    addAuthor(name:String): Author
    updateAuthor(id: ID!, name:String): Author
    deleteAuthor(id:ID!): Author
  }
`;
