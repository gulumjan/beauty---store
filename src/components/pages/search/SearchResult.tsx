"use client";

import { useSearchProductQuery } from "@/redux/api/my-api";
import { useParams, useRouter } from "next/navigation";
import scss from "./SearchResult.module.scss";
import { IoIosHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";
import Star from "../flashSales/star/Star";

const SearchResult = () => {
  const params = useParams();
  const searchQuery = params.searchQuery as string;
  const router = useRouter();

  const { data, isLoading, error } = useSearchProductQuery(
    { query: searchQuery },
    { skip: !searchQuery }
  );

  return (
    <div className={scss.SearchResult}>
      {isLoading && <p>Loading...</p>}
      {error! && <p>Error loading products.</p>}
      {data ? (
        <ul>
          {data?.map((product) => (
            <li
              onClick={() => router.push(`/products/${product.id}`)}
              key={product.id}
              className={scss.group}
            >
              <div className={`${scss["product-card"]} group-hover-shadow`}>
                <div className={scss["discount-badge"]}>
                  <p>{product.discountPercentage}%</p>
                </div>
                <div className={scss.icons}>
                  <div className={scss.icon}>
                    <IoIosHeart />
                  </div>
                  <div className={scss.icon}>
                    <MdAddShoppingCart />
                  </div>
                </div>

                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="max-w-32 h-32"
                />
              </div>

              <h3 className={scss["product-title"]}>{product.title}</h3>
              <p className={scss.price}>{product.price}$</p>
              <div className={scss["star-rating"]}>
                <Star count={5} />{" "}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResult;
