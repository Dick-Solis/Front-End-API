import FollowingContainer from "../../styles/FollowingContainer";
import SideNavBarForm from "../NavBars/SideNavBar";
import styled from "@emotion/styled";

const StyledContainerFollowings = styled.div`
  margin-left: 250px;
`;

function Following() {
  return (
    <div>
      <SideNavBarForm />
      <StyledContainerFollowings>
        <FollowingContainer>
          <h1>Followings</h1>
          <h2>sdasdasdfgdfgdfgdfgd</h2>
        </FollowingContainer>
      </StyledContainerFollowings>
    </div>
  );
}

export default Following;
