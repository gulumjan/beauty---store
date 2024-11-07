"use client";
import { FC } from "react";
import scss from "./DetailsPage.module.scss";
import {
  useGetProductByIdQuery,
  useAddFavouriteMutation,
  useCheckFavouriteQuery,
  useAddBasketMutation,
  useCheckBasketQuery,
  useGetUserQuery,
} from "@/redux/api/my-api";

import { useParams } from "next/navigation";
import Collection from "../collection/Collection";

const DetailsPage: FC = () => {
  const { data } = useGetUserQuery();
  const { id } = useParams();
  const productId = Number(id);
  const userId = data?.id;

  const { data: productData, isLoading: isProductLoading } =
    useGetProductByIdQuery(productId);
  const { data: favouriteData, isLoading: isFavouriteLoading } =
    useCheckFavouriteQuery({ userId, productId });
  const { data: basketData, isLoading: isBasketLoading } = useCheckBasketQuery({
    userId,
    productId,
  });

  const [addFavourite] = useAddFavouriteMutation();
  const [addBasket] = useAddBasketMutation();

  const handleAddToFavourite = async () => {
    if (productData) {
      try {
        await addFavourite({
          userId,
          productId,
          category: productData.category,
          title: productData.title,
          image: productData.images[0],
        }).unwrap();
        alert("Product added to favourites!");
      } catch (error) {
        console.error("Failed to add to favourites:", error);
      }
    }
  };

  const handleAddToBasket = async () => {
    if (productData) {
      try {
        await addBasket({
          userId,
          productId,
          category: productData.category,
          title: productData.title,
          image: productData.images[0],
        }).unwrap();
        alert("Product added to basket!");
      } catch (error) {
        console.error("Failed to add to basket:", error);
      }
    }
  };

  if (isProductLoading || isFavouriteLoading || isBasketLoading) {
    return <div className={scss.loading}>Loading...</div>;
  }

  if (!productData) {
    return <div className={scss.error}>Product not found.</div>;
  }

  return (
    <>
      <section className={scss.DetailsPage}>
        <div className={scss.overlay}>
          <div className={scss.content}>
            <div className={scss.imageContainer}>
              <img
                src={productData.images[0]}
                alt={productData.title}
                className={scss.image}
              />
            </div>
            <div className={scss.details}>
              <h1 className={scss.title}>{productData.title}</h1>
              <p className={scss.category}>{productData.category}</p>
              <p className={scss.price}>${productData.price}</p>
              <p className={scss.description}>{productData.description}</p>

              {favouriteData?.exists ? (
                <button className={scss.buyButton} disabled>
                  Already in Favourites
                </button>
              ) : (
                <button
                  className={scss.buyButton}
                  onClick={handleAddToFavourite}
                >
                  Add to Favourites
                </button>
              )}

              {basketData?.exists ? (
                <button disabled className={scss.buyButton}>
                  Already in Basket
                </button>
              ) : (
                <button className={scss.buyButton} onClick={handleAddToBasket}>
                  Add to Basket
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <Collection />
    </>
  );
};

export default DetailsPage;
