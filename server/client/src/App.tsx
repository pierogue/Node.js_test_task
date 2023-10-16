import React from 'react';
import logo from './logo.svg';
import './App.css';

import {createTRPCProxyClient, httpBatchLink} from '@trpc/client'
import type {AppRouter} from "../../index";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
      httpBatchLink({
        url:'http://localhost:3000'
      })
  ]
})

async function App() {
  const res = await trpc.getArr.query(2);

  return (
    <div className="App">
      {res}
    </div>
  );
}

export default App;
