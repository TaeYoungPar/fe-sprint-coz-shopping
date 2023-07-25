import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";

export default {
  title: "Components/Bookmark",
  component: Bookmark,
  tags: ["autodocs"],

  argTypes: {
    isBookmarked: {
      description: "북마크 상태 (true: 북마크 on, false: 북마크 off)",
      defaultValue: true,
    },
  },
};

const Template = (args) => {
  const [isBookmarked, setIsBookmarked] = useState(args.isBookmarked);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  useEffect(() => {
    setIsBookmarked(args.isBookmarked);
  }, [args.isBookmarked]);

  return (
    <Bookmark
      isBookmarked={isBookmarked}
      onBookmarkClick={handleBookmarkClick}
    />
  );
};

export const On = Template.bind({});
On.args = {
  isBookmarked: true,
};

export const Off = Template.bind({});
Off.args = {
  isBookmarked: false,
};
