import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ErrorBoundary from 'components/ErrorBoundary';
import FullScreenSpinner from 'components/FullScreenSpinner';

const isLoading = () => <FullScreenSpinner isLoading />;

const client = new ApolloClient({
	uri: "https://api.blocktap.io/graphql",
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={isLoading()}>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
