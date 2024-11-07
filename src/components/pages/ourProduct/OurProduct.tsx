"use client";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import styles from "./OurProduct.module.scss";
import Star from "../flashSales/star/Star";
import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useGetProductJeweleryQuery } from "@/redux/api/my-api";

const OurProducts = () => {
  const { data } = useGetProductJeweleryQuery();
  const router = useRouter();

  return (
    <div className={styles.OurProduct}>
      <div className={styles.productSection}>
        <div className={styles.header}>
          <div className={styles.redLine}></div>
          <span className={styles.ourProductsText}>Our Products</span>
        </div>

        <div className={styles.titleSection}>
          <h1 className={styles.title}>Explore Our Products</h1>
          <div className={styles.arrows}>
            <span className={styles.arrow}>
              <GoArrowLeft />
            </span>
            <span className={styles.arrow}>
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>

      <ul>
        {data?.slice(0, 4).map((product) => (
          <li
            onClick={() => router.push(`/products/${product.id}`)}
            key={product.id}
            className={styles.group}
          >
            <div className={`${styles["product-card"]} group-hover-shadow`}>
              <div className={styles["discount-badge"]}>
                <p>{product.discountPercentage}%</p>
              </div>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <IoIosHeart />
                </div>
                <div className={styles.icon}>
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

            <h3 className={styles["product-title"]}>{product.title}</h3>
            <p className={styles.price}>{product.price}$</p>
            <div className={styles["star-rating"]}>
              <Star count={Math.round(product.rating)} />
            </div>
          </li>
        ))}
      </ul>

      <div className={styles["view-all"]}>
        <button onClick={() => router.push(`/jewelery`)}>
          View All Products
        </button>
      </div>
      <hr />
    </div>
  );
};

export default OurProducts;
