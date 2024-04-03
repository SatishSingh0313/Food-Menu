import { useEffect, useState } from "react";
import Foodlist from "./Foodlist";

const Orders = () => {

  let [orders, setOrders] = useState(null);

  useEffect(() => {
    let foodOrderd = localStorage.getItem("orders");
    foodOrderd = JSON.parse(foodOrderd);
    console.log(foodOrderd);
    setOrders(foodOrderd);
  }, [])


  return (
    <div className="order">

      {orders && <Foodlist items={orders} title="Food Orders" />}
      
    </div>
  );
}

export default Orders;