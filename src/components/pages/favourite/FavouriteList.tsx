"use client";
import { FC } from "react";
import {
  useDeleteFavouriteProductMutation,
  useGetFavouritesQuery,
} from "@/redux/api/my-api";
import scss from "./FavouriteList.module.scss";
import { TbHeartOff } from "react-icons/tb";

const FavouriteList: FC<{ userId: number }> = ({ userId }) => {
  const {
    data: favourites,
    isLoading,
    error,
    refetch,
  } = useGetFavouritesQuery(userId);
  const [deleteFavouriteProduct] = useDeleteFavouriteProductMutation();

  if (isLoading) return <span className={scss.loader}></span>;
  if (error) return <div>Error loading favourites.</div>;

  const handleDeleteProduct = async (productId: number) => {
    try {
      await deleteFavouriteProduct({ productId }).unwrap();
      console.log("Product successfully deleted");
      refetch(); // Refetch to get the updated list of favourites
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <section className={scss.FavouriteList}>
      <h2>Your Favourites</h2>
      {favourites?.length ? (
        <ul>
          {favourites.map((favourite) => (
            <li key={favourite.id}>
              <img src={favourite.image} alt={favourite.title} />
              <div>
                <h3>{favourite.title}</h3>
                <p>{favourite.category}</p>
                <button onClick={() => handleDeleteProduct(favourite.id)}>
                  <TbHeartOff />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={scss.loader}></div>
      )}
    </section>
  );
};

export default FavouriteList;
