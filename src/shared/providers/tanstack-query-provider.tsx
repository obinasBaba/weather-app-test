'use client';

import React from 'react';

import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryCache, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 10 * 1000, // retry: false,
    },
  },

  queryCache: new QueryCache({
    // onError: (error, query) => {
    // console.log('onError callback of queryCLinet : ---- ', error);
    // toast.error(`Something went wrong: ${error.message}`);
    // },
  }),
});

const persister = createSyncStoragePersister({
  storage: typeof window === 'undefined' ? null : window.localStorage,
  serialize: (client) => {
    return JSON.stringify({
      ...client,
      clientState: {
        ...client.clientState,
        queries: client.clientState.queries.filter(
          // only cache the business unit if it has a data
          // (query) => query.queryKey.includes(businessUnitKeys.all().at(0)) && query.state?.data
          (query) => query.queryKey.includes('none') && query.state?.data
        ),
      },
    });
  },
});

const TanStackQueryProvider = ({ children }: React.PropsWithChildren) => {
  // const [queryClient] = useState(reactQueryClient);

  return (
    <PersistQueryClientProvider
      client={reactQueryClient}
      persistOptions={{
        persister,
      }}
      onSuccess={() => {
        // resume mutations after initial restore from localStorage was successful

        console.log('persisted query client restored ----');
      }}
    >
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
};

export default TanStackQueryProvider;
