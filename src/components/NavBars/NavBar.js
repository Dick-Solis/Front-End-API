import colors from "../../styles/colors";
import styled from "@emotion/styled";
import sign from "../pic/sign.svg";
import log from "../pic/log.svg";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 12px 120px;
  offset: 0px, 2px rgba(0, 0, 0, 0.2);
  align-items: center;
`;

export const StyledLogo = styled.div`
  display: flex;
  padding-left: 32px;
`;

export const StyledMenu = styled.div`
  display: flex;
  padding: 12px;
  gap: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 129px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  align-items: center;
  gap: 9px;
  border-color: ${colors.pink};
  background-color: ${colors.white};
  cursor: pointer;
`;

function NavBarForm() {
  return (
    <StyledNavBar>
      <Link to="/">
        <StyledLogo>
          <img src={require("../Img/logo.png")} alt="WebLogo" />
        </StyledLogo>
      </Link>

      <StyledMenu>
        <Link to="/signup1">
          <StyledButton>
            <img src={sign} alt="Sign Logo" />
            SIGN UP
          </StyledButton>
        </Link>

        <Link to="/login">
          <StyledButton>
            <img src={log} alt="Sign Logo" />
            LOGIN
          </StyledButton>
        </Link>
      </StyledMenu>
    </StyledNavBar>
  );
}

export default NavBarForm;
