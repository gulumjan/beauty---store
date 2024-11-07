import { api as index } from "..";

export const api = index.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["myapi"],
    }),
    getProduct: builder.query<
      BEAUTY.GetKylieCosmeticsResponse,
      BEAUTY.GetKylieCosmeticsRequest
    >({
      query: () => ({
        url: "/api/get-beauty-products",
        method: "GET",
      }),
      providesTags: ["myapi"],
    }),
    getProductById: builder.query<
      BEAUTY.GetKylieCosmeticsByIdResponse,
      BEAUTY.GetKylieCosmeticsByIdRequest
    >({
      query: (_id) => ({
        url: `/api/getById/${_id}`,
        method: "GET",
      }),
      providesTags: ["myapi"],
    }),
    getProductBags: builder.query<
      BEAUTY.GetKylieCosmeticsResponse,
      BEAUTY.GetKylieCosmeticsRequest
    >({
      query: () => ({
        url: `/api/get-bags`,
        method: "GET",
      }),
      providesTags: ["myapi"],
    }),
    addFavourite: builder.mutation({
      query: (favouriteData) => ({
        url: "/api/favourite",
        method: "POST",
        body: favouriteData,
      }),
      invalidatesTags: ["favourites"],
    }),
    checkFavourite: builder.query({
      query: ({ userId, productId }) => ({
        url: "/api/fav-check",
        method: "POST",
        body: { userId, productId },
      }),
      providesTags: ["favourites"],
    }),
    getFavourites: builder.query<
      BEAUTY.GetFavouriteResponse,
      BEAUTY.GetFavouriteRequest
    >({
      query: (userId) => ({
        url: `/api/get-favourite/${userId} `,
        method: "GET",
      }),
      providesTags: ["favourites"],
    }),
    getUser: builder.query<User, void>({
      query: () => ({
        url: "/api/v1/get-user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    getProductJewelery: builder.query<
      BEAUTY.GetKylieCosmeticsResponse,
      BEAUTY.GetKylieCosmeticsRequest
    >({
      query: () => ({
        url: `/api/get-jewelery`,
        method: "GET",
      }),
      providesTags: ["myapi"],
    }),
    addBasket: builder.mutation({
      query: (basketData) => ({
        url: "/api/basket-post",
        method: "POST",
        body: basketData,
      }),
      invalidatesTags: ["basket"],
    }),
    checkBasket: builder.query({
      query: ({ userId, productId }) => ({
        url: "/api/basket-check",
        method: "POST",
        body: { userId, productId },
      }),
      providesTags: ["basket"],
    }),
    getBaskets: builder.query<
      BEAUTY.GetBasketProductsResponse,
      BEAUTY.GetBasketProductsRequest
    >({
      query: (userId) => ({
        url: `/api/get-basket/${userId} `,
        method: "GET",
      }),
      providesTags: ["basket"],
    }),
    deleteBasketProduct: builder.mutation<
      BEAUTY.DeleteBasketProductResponse,
      BEAUTY.DeleteBasketProductRequest
    >({
      query: ({ productId }) => ({
        url: `/api/basket-delete`,
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["basket"],
    }),
    deleteFavouriteProduct: builder.mutation<
      BEAUTY.DeleteBasketProductResponse,
      BEAUTY.DeleteBasketProductRequest
    >({
      query: ({ productId }) => ({
        url: `/api/favourite-delete`,
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["favourites"],
    }),
    searchProduct: builder.query<
      BEAUTY.SearchProductResponse,
      BEAUTY.SearchProductRequest
    >({
      query: ({ query }) => ({
        url: `/api/get-search?query=${query}`,
        method: "GET",
      }),
      providesTags: ["myapi"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
  useGetProductByIdQuery,
  useGetProductBagsQuery,
  useAddFavouriteMutation,
  useCheckFavouriteQuery,
  useGetFavouritesQuery,
  useGetUserQuery,
  useGetProductJeweleryQuery,
  useAddBasketMutation,
  useCheckBasketQuery,
  useGetBasketsQuery,
  useDeleteBasketProductMutation,
  useDeleteFavouriteProductMutation,
  useSearchProductQuery,
} = api;
