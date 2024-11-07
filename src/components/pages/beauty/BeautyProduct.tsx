"use client";
import scss from "./BeautyProduct.module.scss";
import { useGetProductQuery } from "@/redux/api/my-api";
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { useRouter } from "next/navigation";
import Star from "../flashSales/star/Star";

const BeautyProduct = () => {
  const { data } = useGetProductQuery();
  const router = useRouter();

  return (
    <section className={scss.BeautyProduct}>
      <div className="container">
        <div className={scss.content}>
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
                      <IoEyeSharp />
                    </div>
                  </div>

                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={200}
                    height={200}
                    className={scss.image}
                  />
                </div>

                <h3 className={scss["product-title"]}>{product.title}</h3>
                <p className={scss.price}>{product.price}$</p>
                <div className={scss["star-rating"]}>
                  <Star count={Math.ceil(product.rating)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BeautyProduct;
