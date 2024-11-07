import { FC } from "react";
import scss from "./SearchVideo.module.scss";

const SearchVideo: FC = () => {
  return (
    <section className={scss.SearchVideo}>
      <div className="container">
        <div className={scss.content}>
          <iframe
            src="https://www.youtube.com/embed/vCJ6U7mQmYw?autoplay=1&controls=0&loop=1&playlist=vCJ6U7mQmYw"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className={scss.video}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SearchVideo;
