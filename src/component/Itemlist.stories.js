import React, { useState } from "react";
import Itemlist from "./Itemlist";

export default {
  title: "Components/Itemlist",
  component: Itemlist,
  tags: ["autodocs"],

  argTypes: {
    items: {
      description: "상품 리스트중 하나의 Item, 모달 및 북마크 기능 가능",
      defaultValue: true,
    },
  },
};

const onBookmarkClick = (itemId, setItems, items) => {
  const itemToUpdate = items.find((item) => item.id === itemId);

  if (itemToUpdate) {
    itemToUpdate.isBookmarked = !itemToUpdate.isBookmarked;
    setItems([...items]);
  }
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);

  return (
    <Itemlist
      items={items}
      onBookmarkClick={(itemId) => onBookmarkClick(itemId, setItems, items)}
    />
  );
};

export const Item = Template.bind({});
Item.args = {
  items: [
    {
      id: 1,
      type: "Category",
      title: "미술",
      image_url: "/Image/productimg.png",
      discountPercentage: 20,
      price: 10000,
      isBookmarked: false,
    },
  ],
};
