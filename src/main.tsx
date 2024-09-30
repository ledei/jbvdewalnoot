import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
