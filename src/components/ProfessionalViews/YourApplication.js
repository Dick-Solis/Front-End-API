import styled from "@emotion/styled";

import SideNavBarForm from "../NavBars/SideNavBar";

export const StyledFindThatContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: row;
`;

function YourApplication() {
  return (
    <StyledFindThatContainer>
      <SideNavBarForm />
    </StyledFindThatContainer>
  );
}

export default YourApplication;
