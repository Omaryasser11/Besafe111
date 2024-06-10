import React, { useEffect } from "react";
import "./CustomerBill.scss";

const CustomerBill = ({ data }) => {
  console.log("items", data.paymentItems);
  console.log("customer", data.user);
  return (
    <div className="customer-bill col-12 ">
      <h2>Customer Bill</h2>
      <div className="customer-info">
        <p>
          <strong>Name:</strong> {data.user.name}
        </p>
        <p>
          <strong>Email:</strong> {data.user.email}
        </p>
      </div>
      <div className="bill-items">
        <h3>Items:</h3>

        <ul>
          {data.paymentItems.map((i) => (
            <li>
              <h4>{i.packageName}</h4>
              <h4>
                ${i.price} * {i.quantity}
              </h4>
            </li>
          ))}
        </ul>
      </div>
      <div className="total">
        <h4>Total:</h4>
        <h4>${data.amount}</h4>
      </div>
    </div>
  );
};

export default CustomerBill;
