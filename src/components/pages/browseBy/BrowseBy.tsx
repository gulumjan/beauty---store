import { MdFace2, MdFace3 } from "react-icons/md";
import styles from "./BrowseBy.module.scss";
import { IoBagHandleSharp } from "react-icons/io5";
import { GiAmpleDress, GiHealthPotion, GiJewelCrown } from "react-icons/gi";

const BrowseBy = () => {
  return (
    <div className={styles.BrowseBy}>
      <div className={styles.header}>
        <div className={styles.redLine}></div>
        <span className={styles.categoriesText}>Categories</span>
      </div>

      <h1 className={styles.title}>Browse By Category</h1>

      <div className={styles.categories}>
        <div className={styles.categoryCard}>
          <h1 className={styles.icon}>
            <GiAmpleDress />
          </h1>
          <p>Dresses</p>
        </div>

        <div className={styles.categoryCard}>
          <h1 className={styles.icon}>
            <IoBagHandleSharp />
          </h1>
          <p>Bags</p>
        </div>

        <div className={styles.categoryCard}>
          <h1 className={styles.icon}>
            <GiJewelCrown />
          </h1>
          <p>Jewelery</p>
        </div>

        <div className={styles.categoryCard}>
          <h1 className={styles.icon}>
            <MdFace3 />
          </h1>
          <p>Cosmetics</p>
        </div>

        <div className={styles.categoryCard}>
          <h1 className={styles.icon}>
            <GiHealthPotion />
          </h1>
          <p>Health</p>
        </div>

        <div className={styles.categoryCard}>
          <h1 className={styles.icon}>
            <MdFace2 />
          </h1>
          <p>Hair Care</p>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default BrowseBy;
