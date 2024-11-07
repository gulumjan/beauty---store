"use client";
import { FC, useState } from "react";
import scss from "./BasketPage.module.scss";
import {
  useDeleteBasketProductMutation,
  useGetBasketsQuery,
} from "@/redux/api/my-api";
import { useRouter } from "next/navigation";

const BasketPage: FC<{ userId: number }> = ({ userId }) => {
  const { data, refetch } = useGetBasketsQuery(userId);
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
  const router = useRouter();
  const [deleteBasketProduct] = useDeleteBasketProductMutation();

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  const handleDeleteProduct = async (productId: number) => {
    try {
      await deleteBasketProduct({
        productId,
      }).unwrap();

      refetch();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const subtotal = data?.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <section className={scss.BasketPage}>
      <div className="container">
        <div className={scss.content}>
          <table className={scss.table}>
            <thead>
              <tr>
                <th>Product </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} />
                    {item.title}
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <select
                      value={quantities[item.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>${item.price * (quantities[item.id] || 1)}</td>
                  <td
                    onClick={() => handleDeleteProduct(item.id)}
                    className={scss.deleteButton}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={scss.actions}>
            <button className={scss.button} onClick={() => router.back()}>
              Return To Shop
            </button>
            <button className={scss.button}>Update Cart</button>
          </div>
          <div className={scss.coupon}>
            <input type="text" placeholder="Coupon Code" />
            <button className={scss.applyCoupon}>Apply Coupon</button>
          </div>
          <div className={scss.cartTotal}>
            <h3>Cart Total</h3>
            <p>Subtotal: ${subtotal}</p>
            <p>Shipping: Free</p>
            <p>Total: ${subtotal}</p>
            <button className={scss.checkoutButton}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketPage;
