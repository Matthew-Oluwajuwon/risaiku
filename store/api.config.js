import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseUrl = process.env.API_BASE_URL;

export const baseQueryWithReauth = (baseQuery) => {
  async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      console.log(result.error);
    }
  };
};

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const apiConfig = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth(baseQuery),
  tagTypes: ["fetchData"],
  endpoints: (builder) => ({
    postMutation: builder.mutation({
      query: (data) => {
        return {
          url: data.postUrl,
          method: "POST",
          body: data.request,
        };
      },
      invalidatesTags: (_result, _error, args) => [
        {
          type: "fetchData",
          id: args.id,
        },
      ],
    }),
  }),
});
