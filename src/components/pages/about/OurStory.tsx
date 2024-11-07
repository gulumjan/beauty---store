import { FC } from "react";
import scss from "./OurStory.module.scss";
import Image from "next/image";
import logoImg from "../../../images/Services.png";
import SecondPerson from "../../../images/Frame 875.png";
import ThirdPerson from "../../../images/Frame 876.png";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import Service1 from "../../../images/Services (1).png";
import Service2 from "../../../images/Services (2).png";
import Service3 from "../../../images/Services (3).png";

const OurStory: FC = () => {
  return (
    <section className={scss.OurStory}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.story}>
            <div className={scss.story__text}>
              <h1>Our Story</h1>
              <p>
                Kylie Jenner launched her own cosmetics brand, Kylie Cosmetics,
                in 2015, leveraging her massive social media following and the
                popularity of beauty products. Here is a breakdown of how she
                opened her own cosmetics line: <br />
                1. Capitalizing on Social Media Influence Social Media <br />
              </p>
              <p>
                2. Understanding the Beauty Industry Personal Interest: Kylie
                had a passion for beauty products, especially lip products, and
                her personal makeup style (notably her lip fillers and bold lip
                looks) became a trend in itself. She built a brand around her
                personal beauty journey. Market Research: Kylie was aware of the
                beauty industry is trends, especially the demand for
                high-quality but affordable products. Her brand was positioned
                as a luxury yet accessible line that catered to her core
                audience of younger beauty enthusiasts.
              </p>
            </div>
            <div className={scss.story__img}>
              <Image
                width={620}
                height={520}
                src="https://fraguru.com/himg/o.4xDEDiRZyCO.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={scss.categories}>
            <div className={scss.categoryCard}>
              <Image width={75} height={75} src={logoImg} alt="" />
              <h2>10.5k</h2>
              <p>Customer active in our site</p>
            </div>
            <div className={scss.categoryCard}>
              <Image width={75} height={75} src={logoImg} alt="" />
              <h2>33k</h2>
              <p>Customer active in our site</p>
            </div>
            <div className={scss.categoryCard}>
              <Image width={75} height={75} src={logoImg} alt="" />
              <h2>45.5k</h2>
              <p>Customer active in our site</p>
            </div>
            <div className={scss.categoryCard}>
              <Image width={75} height={75} src={logoImg} alt="" />
              <h2>25k</h2>
              <p>Customer active in our site</p>
            </div>
          </div>
          <div className={scss.person}>
            <div className={scss.personCard}>
              <Image
                width={350}
                height={410}
                src="https://media.glamour.com/photos/65b13e113979977389975a65/master/w_1600%2Cc_limit/1957540754"
                alt=""
              />
              <h4>Kylie Jenner</h4>
              <p>Business Women</p>
              <div className={scss.social}>
                <SlSocialTwitter />
                <BsInstagram />
                <RiLinkedinLine />
              </div>
            </div>
            <div className={scss.personCard}>
              <Image width={350} height={410} src={SecondPerson} alt="" />
              <h4>Emma Watson</h4>
              <p>Managing Director</p>
              <div className={scss.social}>
                <SlSocialTwitter />
                <BsInstagram />
                <RiLinkedinLine />
              </div>
            </div>
            <div className={scss.personCard}>
              <Image width={350} height={410} src={ThirdPerson} alt="" />
              <h4>Will Smith</h4>
              <p>Product Designer</p>
              <div className={scss.social}>
                <SlSocialTwitter />
                <BsInstagram />
                <RiLinkedinLine />
              </div>
            </div>
          </div>
          <div className={scss.deliveries}>
            <div className={scss.delivery}>
              <Image src={Service1} alt="" />
              <h5>FREE AND FAST DELIVERY</h5>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className={scss.delivery}>
              <Image src={Service2} alt="" />
              <h5>24/7 CUSTOMER SERVICE</h5>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className={scss.delivery}>
              <Image src={Service3} alt="" />
              <h5>MONEY BACK GUARANTEE</h5>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
