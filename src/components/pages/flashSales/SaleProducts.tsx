"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useGetProductQuery } from "@/redux/api/my-api";
import Star from "./star/Star";
import scss from "./Sale.module.scss";
import { MdAddShoppingCart } from "react-icons/md";

const SaleProducts = () => {
  const { data, error, isLoading } = useGetProductQuery();
  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date();
    endDate.setHours(24, 0, 0, 0);
    const difference = endDate.getTime() - now.getTime();

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) return <p>Загрузка данных...</p>;
  if (error) return <p>Ошибка при загрузке данных.</p>;

  return (
    <div className={scss.SaleProducts}>
      <div className={scss.flashSales}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                backgroundColor: "#e75a5a",
                width: "30px",
                height: "50px",
                borderRadius: "6px",
              }}
              className={scss.flashSales_tag}
            ></div>
            <h4 style={{ color: "#e75a5a" }} className={scss.flashSales_b}>
              Today is
            </h4>
          </div>
          <h2 className={scss.flashSales__title}>Beauty Products</h2>
        </div>
        <div className={scss.countdown}>
          <div className={scss.countdown__item}>
            <span className={scss.countdown__itemLabel}>Hours</span>
            <div className={scss.countdown__itemTime}>
              {timeLeft.hours == 0 ? timeLeft.hours + "0" : timeLeft.hours}
            </div>
          </div>
          <div className={scss.countdown__separator}>:</div>
          <div className={scss.countdown__item}>
            <span className={scss.countdown__itemLabel}>Minutes</span>
            <div className={scss.countdown__itemTime}>{timeLeft.minutes}</div>
          </div>
          <div className={scss.countdown__separator}>:</div>
          <div className={scss.countdown__item}>
            <span className={scss.countdown__itemLabel}>Seconds</span>
            <div className={scss.countdown__itemTime}>{timeLeft.seconds}</div>
          </div>
        </div>
      </div>
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
        <button onClick={() => router.push(`/beauty`)}>
          View All Products
        </button>
      </div>
      <hr />
    </div>
  );
};

export default SaleProducts;
