import { FC } from "react";
import scss from "./Footer.module.scss";
import { CgAirplane } from "react-icons/cg";
import Image from "next/image";
import qur from "@/images/Qrcode 1.png";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.exclusive}>
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <input type="text" placeholder="Enter your email" />
            <span>
              <CgAirplane />
            </span>
          </div>
          <div className={scss.Support}>
            <h1>Support</h1>
            <h4>
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </h4>
            <h4>exclusive@gmail.com</h4>
            <h4>+88015-88888-9999</h4>
          </div>
          <div className={scss.Account}>
            <h1>Account</h1>
            <h4>My Account</h4>
            <h4>Login / Register</h4>
            <h4>Cart</h4>
            <h4>Wishlist</h4>
            <h4>Shop</h4>
          </div>

          <div className={scss.Quick}>
            <h1>Quick Link</h1>
            <h4>Privacy Policy</h4>
            <h4>Terms Of Use</h4>
            <h4>FAQ</h4>
            <h4>Contact</h4>
          </div>

          <div className={scss.Download}>
            <h1>Download App</h1>
            <p>Save $3 with App New User Only</p>
            <Image src={qur} alt="" />
            <div className={scss.ico}>
              <span>
                <RiFacebookLine />
              </span>
              <span>
                <CiTwitter />
              </span>
              <span>
                <CiInstagram />
              </span>
              <span>
                <TiSocialLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
