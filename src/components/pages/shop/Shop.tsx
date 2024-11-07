import { FC } from "react";
import scss from "./Shop.module.scss";

const Shop: FC = () => {
  return (
    <section className={scss.Shop}>
      <div className="container">
        <h2 className={scss.heading}>Shop</h2>
        <h3 className={scss.subheading}>Holiday Gift Guide</h3>

        <div className={scss.grid}>
          <div className={scss.card}>
            <img
              src="https://kyliecosmetics.com/cdn/shop/files/0928_Holiday_Gift_Sets_Site_Imagery_Mobile_390x462_Liner_Set.jpg?crop=center&height=590&v=1718872499&width=450"
              alt="Makeup Gifts"
            />
            <div className={scss.overlay}>
              <p>Makeup Gifts</p>
            </div>
          </div>

          <div className={scss.card}>
            <img
              src="https://kyliecosmetics.com/cdn/shop/files/KJF_COSMIC_24_Group_1_White_CP_142_Hero_WS_1_3f78732b-cc31-46ec-bd49-a07c3c84946a.jpg?crop=center&height=590&v=1729611399&width=450"
              alt="Fragrance Gifts"
            />
            <div className={scss.overlay}>
              <p>Fragrance Gifts</p>
            </div>
          </div>

          <div className={scss.card}>
            <img
              src="https://kyliecosmetics.com/cdn/shop/files/KJS_HOLIDAY_24_Lip_Oil_Set_02_CP_124_Hero_WS_1_380092fb-03a1-4de4-85fd-7cf7427f1fde.jpg?crop=center&height=590&v=1729611415&width=450"
              alt="Skincare Gifts"
            />
            <div className={scss.overlay}>
              <p>Skincare Gifts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
