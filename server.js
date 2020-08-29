const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})


app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  );

app.listen(4000, () => {console.log('Sever runing on port 4000')});