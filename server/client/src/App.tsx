import React, {useState} from 'react';
import './App.css';
import { trpc } from './lib/trpc'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from "@trpc/client";

function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
          httpBatchLink({
            url:"http://localhost:3000/trpc"
          })
      ]
    })
  })

    const res = trpc.employee.list.useQuery();
  return (
      <trpc.Provider queryClient = {queryClient} client={trpcClient}>
          <QueryClientProvider client={queryClient}>
            <div className="App">
                {JSON.stringify(res.data, null, 2)}
            </div>
          </QueryClientProvider>
      </trpc.Provider>
  );
}

export default App;
