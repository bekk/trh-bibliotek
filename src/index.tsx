import Airtable from 'airtable';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { getData } from '~/api';
import { GlobalContextProvider } from '~/GlobalContextProvider';
import { reportWebVitals } from '~/reportWebVitals';
import { App } from './App';

export const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY || '';
export const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || '';
export const AIRTABLE_TABLE_ID = import.meta.env.VITE_AIRTABLE_TABLE_ID || '';
// console.log('AIRTABLE_API_KEY:', AIRTABLE_API_KEY);
console.log('AIRTABLE_BASE_ID:', AIRTABLE_BASE_ID);
console.log('AIRTABLE_TABLE_ID:', AIRTABLE_TABLE_ID);

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_API_KEY,
});
export const BIBLIOTEK = Airtable.base(AIRTABLE_BASE_ID);

getData();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <GlobalContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContextProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
