import { useState, useEffect } from "react";
import BookMarkList from "../component/BookMarkList";
import { styled } from "styled-components";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
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

const BookmarkDiv = styled.div`
  width: 81.2%;
`;

const BookmarkPage = ({ items, setItems }) => {
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
          const isBookmarked = !item.isBookmarked;
          if (isBookmarked) {
            toast.success("북마크가 추가되었습니다."); // 북마크 추가 시 Toast 메시지
          } else {
            toast.error("북마크가 제거되었습니다."); // 북마크 제거 시 Toast 메시지
          }
          return { ...item, isBookmarked };
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
          <TextDiv>상품</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/cate.png"
            onClick={() => onClickHandler("Category")}
          />
          <TextDiv>카테고리</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/exhib.png"
            onClick={() => onClickHandler("Exhibition")}
          />
          <TextDiv>기획전</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/brand.png"
            onClick={() => onClickHandler("Brand")}
          />
          <TextDiv>브랜드</TextDiv>
        </div>
      </CategoryDiv>
      <BookmarkDiv>
        <BookMarkList
          items={filteredItems
            .filter((item) => item.isBookmarked)
            .slice(0, page * 16)}
          setItems={setItems}
          onBookmarkClick={handleBookmarkClick}
        />
        <div ref={ref}>{console.log("여기랍니다")}</div>
      </BookmarkDiv>
    </Flex>
  );

  //   <BookMarkList items={items} setItems={setItems} />;
};

export default BookmarkPage;
