const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./model/schema');
const { PORT } = require('./config');

const app = express();

app.use(
	'/',
	graphqlHTTP({
		schema: schema,
		graphiql: true
	})
);

app.listen(PORT);
console.log('GraphQL API server running on', PORT);
