interface ITelegramSmsBot {
  name: string;
  email: string;
  phone: number;
  message: string;
}
interface IGetFake {
  products: {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    thumbnail: string;
    images: string[];
  }[];
  total: number;
  skip: number;
  limit: number;
}

interface IKylieCosmetics {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

interface IRegisterUser {
  email: string;
  password: string;
  username: string;
  photo: string;
}
interface PostRegisterUserResponse {
  message: string;
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}

interface IGetById {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

interface Category {
  slug: string;
  name: string;
  url: string;
}

interface postLoginRequest {
  email: string;
  password: string;
}

interface postLoginResponse {
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}

interface iGetUser {
  profile: {
    id: string;
    username: string;
    role: string;
    email: string;
    isActive: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface IRefreshTokenRequest {
  refreshToken: string;
}

interface IRefreshTokenResponse {
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
  favourites: Favourite[];
}
interface Favourite {
  id: number;
  userId: number;
  productId: number;
  category: string;
  title: string;
  image: string;
  createdAt: Date;
}

interface Basket {
  id: number;
  userId: number;
  productId: number;
  category: string;
  title: string;
  image: string;
  createdAt: Date;
  price: number;
}

interface SearchResult {
  id: string;
  title: string;
  rating: number;
  price: number;
  images: string[];
  discountPercentage: number;
}
interface IFakeData {
  id: number;
  name: string;
  logo: string;
  title: string;
  mainImg: string | StaticImageData;
}
