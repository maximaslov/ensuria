import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { BASE_URL } from "./apiConfig";
import {
 GetCardsResponse,
 GetPicturesResponse,
 GetTextResponse,
} from "./apiTypes";

export const api = createApi({
 reducerPath: "ensuriaApi",
 baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
 extractRehydrationInfo(action, { reducerPath }) {
  if (action.type === HYDRATE) {
   return action.payload[reducerPath];
  }
 },
 endpoints: (builder) => ({
  getTextContent: builder.query<GetTextResponse, void>({
   query: () => "1",
  }),
  getCards: builder.query<GetCardsResponse, void>({
   query: () => "2",
  }),
  getPictures: builder.query<GetPicturesResponse, void>({
   query: () => "3",
  }),
 }),
});

export default api;

export const { useGetTextContentQuery, useGetCardsQuery, useGetPicturesQuery } =
 api;

export const { getTextContent, getCards, getPictures } = api.endpoints;
