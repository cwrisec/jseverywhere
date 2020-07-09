// index.js
// This is the main entry point of our application

const express = require('express');
/// GraphQL 
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();

// Run the server on port in the .env file or 4000
const port = process.env.PORT || 4000;



// Construct a schema using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Provide resolver functions for our schema fields
const resolvers = {
    Query: {
        hello: () => 'hello World'
    }
};

// Apollo Server Setup
const server = new ApolloServer({ typeDefs, resolvers});

// Apply the Apollo GraphQL middleware and set the path to /api

server.applyMiddleware({ app, path: '/api'});
app.listen({ port }, () => console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`));
