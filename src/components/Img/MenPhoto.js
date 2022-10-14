import styled from "@emotion/styled";
import photo from "./men.svg";

const ContainerPhoto = styled.div`
  display: flex;
  height: 567px;
  width: 560px;
`;

function MenPhoto() {
  return (
    <ContainerPhoto>
      <div>
        <img src={photo} alt="" />
      </div>
    </ContainerPhoto>
  );
}

export default MenPhoto;
