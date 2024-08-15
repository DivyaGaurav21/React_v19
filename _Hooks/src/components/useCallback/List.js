import React, { useEffect, useState } from "react";

const List = ({ getItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItem);
    console.log("Updating Items");
  }, [getItem]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
