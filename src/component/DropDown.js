import { Link } from "react-router-dom";
import { styled } from "styled-components";

// const ModalContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

const DropDownlPolygon = styled.img`
  width: 16px;
  height: 18px;
  position: absolute;
  transform: translate(50%, 0%);
`;
const DropDownMenu = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  transform: translate(-60%, 12%);
  border-radius: 12px;
  margin-top: -5px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const DropDownPtag = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  width: 200px;
  height: 50px;
  padding: 15px;
  margin: 10px 0px 0px 10px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const DropDownImg = styled.img`
  margin-right: 8px;
`;

const DropDown = ({ setIsOn }) => {
  const onClickHandler = () => {
    setIsOn(false);
  };
  return (
    <div>
      <DropDownlPolygon src="Image/polygon.png" />
      <DropDownMenu>
        <DropDownPtag>박태영님,안녕하세요!</DropDownPtag>
        <StyledLink to="/products/list">
          <DropDownPtag onClick={onClickHandler}>
            <DropDownImg src="/Image/product.png" />
            <p>상품리스트 페이지</p>
          </DropDownPtag>
        </StyledLink>

        <StyledLink to="/bookmark">
          <DropDownPtag onClick={onClickHandler}>
            <DropDownImg src="/Image/bookmark.png" />
            <p>북마크 페이지</p>
          </DropDownPtag>
        </StyledLink>
      </DropDownMenu>
    </div>
  );
};

export default DropDown;
