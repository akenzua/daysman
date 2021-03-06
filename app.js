const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const isAuth = require('./middleware/is-auth');
const cors = require('cors');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');


const app = express();
app.use(cors());
app.options('*', cors());



app.use(bodyParser.json());


app.use(isAuth);

app.use('/graphql', 
    graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
})
);

mongoose.connect(`mongodb+srv://akenzua:${process.env.MONGO_PASSWORD}@cluster0-3rpvi.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
.then(() => {
    app.listen(4000);
}).catch(err => {
    console.log(err);
});
