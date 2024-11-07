"use client";
import { FC } from "react";
import styles from "./Jewelery.module.scss";
import { useGetProductJeweleryQuery } from "@/redux/api/my-api";
import { useRouter } from "next/navigation";
import { IoIosHeart } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import Image from "next/image";
import Star from "../flashSales/star/Star";

const Jewelery: FC = () => {
  const { data } = useGetProductJeweleryQuery();
  const router = useRouter();

  return (
    <section className={styles.Jewelery}>
      <div className="container">
        <div className={styles.content}>
          <ul>
            {data?.map((product) => (
              <li
                onClick={() => router.push(`/products/${product.id}`)}
                key={product.id}
                className={styles.group}
              >
                <div className={`${styles["product-card"]} group-hover-shadow`}>
                  <div className={styles["discount-badge"]}>
                    <p>-40%</p>
                  </div>
                  <div className={styles.icons}>
                    <div className={styles.icon}>
                      <IoIosHeart />
                    </div>
                    <div className={styles.icon}>
                      <IoEyeSharp />
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

                <h3 className={styles["product-title"]}>{product.title}</h3>
                <p className={styles.price}>{product.price}$</p>
                <div className={styles["star-rating"]}>
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

export default Jewelery;
