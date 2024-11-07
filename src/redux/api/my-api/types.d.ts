namespace BEAUTY {
  type GetKylieCosmeticsResponse = IKylieCosmetics[];
  type GetKylieCosmeticsRequest = void;

  type GetKylieCosmeticsByIdResponse = IKylieCosmetics;
  type GetKylieCosmeticsByIdRequest = number;

  type GetFavouriteResponse = Favourite[];
  type GetFavouriteRequest = number;

  type GetBasketProductsResponse = Basket[];
  type GetBasketProductsRequest = number;

  type DeleteBasketProductRequest = {
    productId: number;
  };

  type DeleteBasketProductResponse = {
    message: string;
    count?: number;
  };
  type SearchProductResponse = SearchResult[];
  type SearchProductRequest = {
    query: string;
  };
}
