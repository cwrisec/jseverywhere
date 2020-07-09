// index.js
// This is the main entry point of our application

const express = require('express');
/// GraphQL 
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();

// Run the server on port in the .env file or 4000
const port = process.env.PORT || 4000;

let notes = [
    { id : '1', content: 'This is a note', author: 'Auth 1'},
    { id : '2', content: 'This is a another note', author: 'Auth 2'},
    { id : '3', content: 'Oh again, a note', author: 'Auth 3'},
    { id : '4', content: 'Neets', author: 'Auth 3'},
];
// Construct a schema using GraphQL schema language
const typeDefs = gql`
    type Note {
        id: ID!
        content: String!
        author: String!
    }
    type Query {
        hello: String
        notes: [Note!]!
        note(id: ID!): Note!
    }
`;

// Provide resolver functions for our schema fields
const resolvers = {
    Query: {
        hello: () => 'hello World',
        notes: () => notes
        
    }
};

// Apollo Server Setup
const server = new ApolloServer({ typeDefs, resolvers});

// Apply the Apollo GraphQL middleware and set the path to /api

server.applyMiddleware({ app, path: '/api'});
app.listen({ port }, () => console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`));
