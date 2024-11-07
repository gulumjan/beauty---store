"use client";

import { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import scss from "./Category.module.scss";
import { useRouter } from "next/navigation";

interface CategoryProps {
  title: string;
  subcategories?: string[];
  link: string;
}

const Category: React.FC<CategoryProps> = ({
  title,
  subcategories = [],
  link,
}) => {
  const [showCategories, setShowCategories] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className={scss.component_container}>
      <div
        onClick={() => {
          handleClick();
          router.push(`${link}`);
        }}
        className={scss.clickable_area}
      >
        {title}
        <span className={scss.icon}>
          {showCategories ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </span>
      </div>

      {showCategories && (
        <div className={scss.categories}>
          {subcategories.length > 0 ? (
            <ul className={scss.subcategory_list}>
              {subcategories.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          ) : (
            <p className={scss.no_subcategories}>No subcategories available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
