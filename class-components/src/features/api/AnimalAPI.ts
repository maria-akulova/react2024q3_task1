import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AnimalResponse, SearchResult } from 'src/components';

export interface Request {
  searchTerm: string;
  itemsPerPage: number;
  page: number;
}

export const animalAPI = createApi({
  reducerPath: 'animalAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v1/rest/animal/' }),
  endpoints: (builder) => ({
    getAnimalsByPage: builder.mutation<SearchResult, Request>({
      query: ({ searchTerm, itemsPerPage, page }) => ({
        url: `search?pageNumber=${page - 1}&pageSize=${itemsPerPage}`,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(`name=${searchTerm}`),
      }),
    }),
    getAnimalByID: builder.query<AnimalResponse, string>({
      query: (id: string) => `?uid=${id}`,
    }),
  }),
});

export const { useGetAnimalsByPageMutation, useGetAnimalByIDQuery } = animalAPI;
