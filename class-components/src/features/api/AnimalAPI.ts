import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Animal, AnimalResponse } from 'src/components';

export const animalAPI = createApi({
  reducerPath: 'animalAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v1/rest/animal/' }),
  endpoints: (builder) => ({
    getAnimalsByPage: builder.query<Animal[], { page: number; itemsPerPage: number }>({
      query: ({ page, itemsPerPage }) => `search?pageNumber=${page - 1}&pageSize=${itemsPerPage}`,
    }),
    getAnimalByID: builder.query<AnimalResponse, string>({
      query: (id: string) => `?uid=${id}`,
    }),
  }),
});

export const { useGetAnimalsByPageQuery, useGetAnimalByIDQuery } = animalAPI;
