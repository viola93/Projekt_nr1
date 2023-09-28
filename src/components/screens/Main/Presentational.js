import React from "react";
import ShopItem from "./components/ShopItem/Presentational";
import "./Styles.scss";

const Main = () => {
  const ShopData = [
    {
      code: "1",
      name: "Dress",
      amount: "1",
    },

    {
      code: "2",
      name: "Skirt",
      amount: "4",
    },
    {
      code: "3",
      name: "Shoes",
      amount: "7",
    },
    {
      code: "4",
      name: "Pants",
      amount: "5",
    },
  ];
  return (
    <div className="main-container">
      {ShopData.map((item, index) => (
        <ShopItem
          key={index}
          codeprops={item.code}
          nameprops={item.name}
          amountprops={item.amount}
        />
      ))}
    </div>
  );
};
export default Main;
