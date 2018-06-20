import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import * as http from 'http';
import config from './config';

let app: express.Express;
let httpServer: http.Server;

export async function startServer(schema: GraphQLSchema): Promise<{}> {
  if (httpServer && httpServer.listening) {
    // Server is already started.
    return Promise.resolve({});
  }

  return new Promise((resolve, reject) => {
    app = express();
    app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
    httpServer = app.listen(config.port, () => {
      console.log(`Running a GraphQL API server at http://localhost:${config.port}/graphql`);
      resolve({});
    });
  });
}

export async function stopServer(): Promise<{}> {
  if (!httpServer || !httpServer.listening) {
    // Server is not started.
    return Promise.resolve({});
  }

  return new Promise((resolve, reject) => {
    httpServer.close(() => resolve({}));
  });
}
