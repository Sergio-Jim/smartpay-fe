import { InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";
import { createApolloProvider } from "@vue/apollo-option";
import { setContext } from "@apollo/client/link/context";
//allow multipart form request
import { createUploadLink } from "apollo-upload-client";

const httpLink = createUploadLink({
  uri:
    process.env.NODE_ENV == "production"
      ? "http://localhost:4000/graphql"
      : "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const provider = createApolloProvider({
  defaultClient: apolloClient,
});
