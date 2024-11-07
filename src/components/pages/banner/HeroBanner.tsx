import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import styles from "./HeroBanner.module.scss";
import { fake_data } from "@/constants/links";
import { GoHeartFill } from "react-icons/go";

const HeroBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.67)), url(https://i.pinimg.com/736x/e9/4c/a6/e94ca6d821e89b3620106157c67d6ac9.jpg)`,
        backgroundPosition: "center",
      }}
      className={styles.heroBanner}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {fake_data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slideItem}>
              <div className={styles.content}>
                <div className={styles.logoContainer}>
                  <GoHeartFill />
                  <h3 className={styles.name}>{item.name}</h3>
                </div>
                <h1 className={styles.title}>{item.title}</h1>
                <button className={styles.button}>
                  Shop Now
                  <IoArrowForwardSharp />
                </button>
              </div>
              <Image
                src={item.mainImg}
                alt="Main Image"
                width={500}
                height={300}
                className={styles.mainImg}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
