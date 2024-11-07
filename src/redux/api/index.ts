import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQueryMyApi = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_MY_API_URL}`,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  return baseQueryMyApi(args, api, extraOptions);
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["fake", "auth", "myapi", "favourites", "basket"],
  endpoints: () => ({}),
});
