import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";
import { FaCircle } from "react-icons/fa";

interface ImagesProps {
  image: string | StaticImport;
  phone: string;
  button: string;
}

export const slider: ImagesProps[] = [
  {
    image: `https://www.intego.com/mac-security-blog/wp-content/uploads/2022/09/iphone-14-hero.jpg`,
    phone: "iPhone 14 Series",
    button: "Shop Now",
  },
  {
    image:
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
    phone: "iPhone 15 Pro Max Series",
    button: "Shop Now",
  },
  {
    image:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202410092133",
    phone: "iPhone 12 Pro Series",
    button: "Shop Now",
  },
];

interface IconsProps {
  icon: IconType;
}

export const circle: IconsProps[] = [
  {
    icon: FaCircle,
  },
];

export const links = [
  {
    name: "Movie",
    href: "/explore/movie",
  },
  {
    name: "TV Shows",
    href: "/explore/tv",
  },
];
export const fake_data: IFakeData[] = [
  {
    id: 1,
    name: "Matte Lip Kit",
    logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    title: "Up to 10% off Voucher",
    mainImg:
      "https://bestofbeauty.shop/cdn/shop/files/kylie-cosmetics-matte-lip-kit-posie-k-705978.png?v=1723209370",
  },
  {
    id: 2,
    name: "Wet Shimmer Quad",
    logo: "https://kyliecosmetics.com/cdn/shop/files/KJC_HOLIDAY_24_WetShimmerQuad_Stylized_800x.jpg?v=1729540940",
    title: "Down to 20% off Voucher",
    mainImg:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_HOLIDAY_24_WetShimmerQuad_Stylized_800x.jpg?v=1729540940",
  },
  {
    id: 3,
    name: "transformative lip tint",
    logo: "https://kyliecosmetics.com/cdn/shop/files/KJC_HOLIDAY_24_TransformativeLipTint_BlackCherry_Stylized_800x.jpg?v=1729546404",
    title: "Under to 10% off Voucher",
    mainImg:
      "https://kyliecosmetics.com/cdn/shop/files/KJC_HOLIDAY_24_TransformativeLipTint_BlackCherry_Stylized_800x.jpg?v=1729546404",
  },
];
export const images = [
  "https://kyliecosmetics.com/cdn/shop/files/v4_Holiday-Collection_Launch_mobile_HP_banner_1022.jpg?crop=center&height=720&v=1729611165&width=720",
  "https://kyliecosmetics.com/cdn/shop/files/Holiday-Sets_PLP_banner_390x390_mobile_ratio.jpg?crop=center&height=720&v=1696516614&width=720",
  "https://i.pinimg.com/originals/a8/f0/f6/a8f0f62d99e9aab34da4f6b6252d42df.jpg",
  "https://i.pinimg.com/550x/08/b0/76/08b076e84e28ff0a4db9d982df4f111c.jpg",
  "https://m.media-amazon.com/images/I/71DuHiHkWLL._AC_UY900_.jpg",
  "https://fashionista.com/.image/t_share/MTYzOTcwNTkzNzE1MTM2MjI1/kylie-skin.jpg",
  "https://ae01.alicdn.com/kf/S6b204e941fd84d08869a13ce1761011eR.jpg_960x960.jpg",
  "https://media.gucci.com/dynamic/b3c8/YxdLHjJYqrJxTrYQKhfMcB8ysFpPvMIYq8Sr3bus0akKIYa9dgD2aEjAWBh9F521cIxKp76+YmNM8pPpwyv05tEYeJB14Vx4KVs81ebz+7ruxUq+SiPujdIde5gAcDMwBbQC_34k_sFvXh4I16h2Qh14dW1MoyN11IoPrU6HWbAKgQ8YuN5w2N2bGeFRdiK0WRY3xwiblIOh1BpvOq3qSNitXMKJzcDex7IEUnYGU271nCtzRpEjaqvsR9fNoR3GHYu307adWa3DNOk6L3Lcm5GVW1vZHJmgQ4HtPsm1bINXvwAcm5QIMimfYsxpsn2k30KmD11dVt5iwRM2IPpacQ==/PromoComponent_Gucci-GiftGiving-Oct24-ASE-240720-0027-4168_001_Default.png",
];

export const categories = [
  {
    title: "Cosmetics",
    subcategories: ["Makeup", "Skincare", "Fragrances"],
    link: "/beauty",
  },
  {
    title: "Bags & Accessories",
    subcategories: ["Handbags", "Wallets", "Scarves"],
    link: "/bags",
  },
  {
    title: "Jewelry",
    subcategories: ["Necklaces", "Earrings", "Bracelets"],
    link: "/jewelery",
  },
  {
    title: "Women's Fashion",
    subcategories: ["Dresses", "Shoes", "Outerwear"],
    link: "/",
  },
  {
    title: "Health & Wellness",
    subcategories: [
      "Vitamins & Supplements",
      "Organic Products",
      "Health Monitors",
    ],
    link: "/",
  },
  {
    title: "Hair Care",
    subcategories: ["Shampoos", "Conditioners", "Hair Treatments"],
    link: "/",
  },
  {
    title: "Nail Care",
    subcategories: ["Nail Polish", "Nail Tools", "Nail Art"],
    link: "/",
  },
  {
    title: "Fragrances",
    subcategories: ["Perfume", "Body Mist", "Aromatherapy"],
    link: "/",
  },
];
