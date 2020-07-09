// index.js
// This is the main entry point of our application

const express = require('express');
const app = express();

const { ApolloServer, gql } = require('apollo-server-express');
const port = process.env.PORT || 4000;

// Construct a schema using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Provide resolver functions for our schema fields
const resolver = {
    Query: {
        hello: () => 'hello World'
    }
};

const server = new ApolloServer({ typeDefs, resolver});


app.get('/', (req,res) => res.send('Hello Stinky!!'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));



