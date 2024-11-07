"use client";

import scss from "./BagsHome.module.scss";
import Star from "../flashSales/star/Star";
import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useGetProductBagsQuery } from "@/redux/api/my-api";
import { MdAddShoppingCart } from "react-icons/md";
const BestSalling = () => {
  const { data } = useGetProductBagsQuery();
  const router = useRouter();

  return (
    <div className={scss.BestSalling}>
      <div className={scss.header}>
        <div className={scss.redLine}></div>
        <span className={scss.categoriesText}>This Month</span>
      </div>

      <h1 className={scss.title}>Bags</h1>
      <ul>
        {data?.slice(0, 4).map((product) => (
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
              <Star count={Math.round(product.rating)} />
            </div>
          </li>
        ))}
      </ul>
      <div className={scss["view-all"]}>
        <button onClick={() => router.push(`/bags`)}>View All Products</button>
      </div>
      <hr />
    </div>
  );
};

export default BestSalling;
