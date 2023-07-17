import { useState, useEffect } from "react";
import Itemlist from "../component/Itemlist";
import { styled } from "styled-components";
import { useInView } from "react-intersection-observer";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
`;

const CategoryDiv = styled.div`
  display: flex;
  text-align: center;
  margin-top: 24px;
`;

const Image = styled.img`
  margin: 2px 20px;

  &:hover {
    cursor: pointer;
  }
`;

const TextDiv = styled.div`
  margin: 2px 0;
`;

const Div = styled.div`
  width: 81.2%;
`;

const ItemlistPage = ({ items, setItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (inView) {
      loadMoreItems();
    }
  }, [inView]);

  const loadMoreItems = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const filteredItems =
    selectedCategory === "전체"
      ? items
      : items.filter((el) => el.type === selectedCategory);

  const onClickHandler = (type) => {
    setSelectedCategory(type);
    setPage(1);
  };

  const handleBookmarkClick = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }
        return item;
      })
    );
  };

  return (
    <Flex>
      <CategoryDiv>
        <div>
          <Image src="/Image/all.png" onClick={() => onClickHandler("전체")} />
          <TextDiv>전체</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/prod.png"
            onClick={() => onClickHandler("Product")}
          />
          <TextDiv onClick={() => onClickHandler("Product")}>상품</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/cate.png"
            onClick={() => onClickHandler("Category")}
          />
          <TextDiv onClick={() => onClickHandler("Category")}>카테고리</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/exhib.png"
            onClick={() => onClickHandler("Exhibition")}
          />
          <TextDiv onClick={() => onClickHandler("Exhibition")}>기획전</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/brand.png"
            onClick={() => onClickHandler("Brand")}
          />
          <TextDiv onClick={() => onClickHandler("Brand")}>브랜드</TextDiv>
        </div>
      </CategoryDiv>
      <Div>
        <Itemlist
          items={filteredItems.slice(0, page * 16)}
          setItems={setItems}
          onBookmarkClick={handleBookmarkClick}
        />
        <div ref={ref}>{console.log("여기랍니다")}</div>
      </Div>
    </Flex>
  );
};

export default ItemlistPage;
