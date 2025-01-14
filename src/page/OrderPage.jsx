import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../actions/orderActions";

const OrderPage = () => {
  const dispatch = useDispatch();
  const { orders = [], isLoading = false, error = null } = useSelector(
    (state) => state.order
  );
  const user = useSelector((state) => state.user.user);

  // Açılır/kapanır kontrolü için state
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    if (user) {
      dispatch(fetchOrders(user.email));
    }
  }, [dispatch, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Açılır/kapanır işlemi
  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-h2 font-bold mb-8 text-blueText">Geçmiş Siparişler</h1>
      {orders.length === 0 ? (
        <p>Henüz siparişiniz bulunmamaktadır.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className=" shadow-md rounded-lg p-6 border border-gray-200"
            >
              {/* Sipariş Özeti */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-secondText text-sm">
                    Sipariş Tarihi:{" "}
                    {new Date(order.order_date).toLocaleDateString()} -{" "}
                    {new Date(order.order_date).toLocaleTimeString()}
                  </p>
                  <p className="text-secondText text-sm">Sipariş Özeti: {`${order.products.length} Ürün`}</p>
                  <p className="text-secondText text-sm">Alıcı: {order.customer_name}</p>
                  <p className=" text-lg font-bold">
                    Tutar: {order.price.toFixed(2)} TL
                  </p>
                </div>
                <button
                  onClick={() => toggleOrderDetails(order.id)}
                  className="bg-blueText text-white px-4 py-2 rounded-md hover:bg-custom-gradient transition "
                >
                  {expandedOrder === order.id ? "Kapat" : "Sipariş Detayı"}
                </button>
              </div>

              {/* Detaylı Sipariş Bilgisi */}
              {expandedOrder === order.id && (
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <p
                    className={`text-sm font-medium ${
                      order.isDelivered ? "text-green-600" : "text-blueText"
                    }`}
                  >
                    {order.isDelivered ? "Teslim Edildi" : "Teslimat Bekleniyor"}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {order.isDelivered
                      ? `${order.products.length} ürün ${new Date(order.delivery_date).toLocaleDateString()} tarihinde teslim edilmiştir.`
                      : `${order.products.length} ürün teslimat aşamasında.`}
                  </p>

                  {/* Ürün Detayları */}
                  <div className="flex flex-wrap gap-4 mt-4">
                    {order.products.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-4 p-4 border rounded-md shadow-sm"
                      >
                        <img
                          src={product.images[0].url}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <p className=" font-medium">{product.name}</p>
                          <p className="text-secondText text-sm">Adet: {product.count}</p>
                          <p className="text-secondText text-sm">
                            Fiyat: {product.price.toFixed(2)} TL
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
