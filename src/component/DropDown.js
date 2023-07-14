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

const DropDownPtag = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  width: 200px;
  height: 50px;
  padding: 15px;
  margin: 10px 5px 0px 5px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const DropDownImg = styled.img`
  margin-right: 8px;
`;

const DropDown = () => {
  return (
    <div>
      <DropDownlPolygon src="polygon.png" />
      <DropDownMenu>
        <DropDownPtag>박태영님,안녕하세요!</DropDownPtag>
        <Link to="/productslist">
          <DropDownPtag>
            <DropDownImg src="product.png" />
            <p>상품리스트 페이지</p>
          </DropDownPtag>
        </Link>

        <Link to="/bookmark">
          <DropDownPtag>
            <DropDownImg src="bookmark.png" />
            <p>북마크 페이지</p>
          </DropDownPtag>
        </Link>
      </DropDownMenu>
    </div>
  );
};

export default DropDown;
