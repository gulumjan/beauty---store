"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./ContactPage.module.scss";
import axios from "axios";
import { IoCall, IoMailUnreadOutline } from "react-icons/io5";

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm<ITelegramSmsBot>();

  const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  const messageModel = (data: ITelegramSmsBot) => {
    let message = `Email :<b>${data.email}</b>\n`;
    message += `Pnone Number :<b>${data.phone}</b>\n`;
    message += `Message :<b>${data.message}</b>\n`;
    return message;
  };
  const onSubmit: SubmitHandler<ITelegramSmsBot> = async (data) => {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: messageModel(data),
    });
    reset();
  };
  return (
    <div className={scss.contactForm}>
      <section className={scss.contactInfo}>
        <div className={scss.infoItem}>
          <span className={scss.icon}>
            <IoCall />
          </span>
          <div>
            <h3>Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>
        <div className={scss.infoItem}>
          <span className={scss.icon}>
            <IoMailUnreadOutline />
          </span>
          <div>
            <h3>Write To Us</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>support@exclusive.com</p>
          </div>
        </div>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={scss.contactFormFields}
      >
        <div className={scss.inputGroup}>
          <input {...register("name")} type="text" placeholder="Your Name *" />
          <input
            {...register("email")}
            type="email"
            placeholder="Your Email *"
          />
          <input {...register("phone")} type="tel" placeholder="Your Phone *" />
        </div>
        <textarea
          {...register("message")}
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
