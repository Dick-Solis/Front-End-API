import colors from "../../styles/colors";
import styled from "@emotion/styled";
import application from "../pic/application.svg";
import following from "../pic/following.svg";
import profile from "../pic/profile.svg";
import logout from "../pic/logout.svg";
import git from "../pic/git.svg";
import ruby from "../pic/ruby.svg";
import react from "../pic/react.svg";
import { Link } from "react-router-dom";
import { BiBriefcase, BiUser, BiLogOutCircle } from "react-icons/bi";
import { HiOutlineDocumentAdd } from "react-icons/hi";

export const StyledSideNavBar = styled.div`
  height: 900px;
  width: 240px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  background-color: ${colors.backgroundDark};
`;

export const StyledSideNavBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  list-style: none;
  align-items: flex-start;
`;

export const StyledSideNavBarList = styled.div`
  height: 20px;
  padding-top: 15px;
  padding-left: 16px;
  font-size: 16px;
  color: ${colors.darkgray};
  display: flex;
  gap: 18px;
  text-align: right;
  align-items: center;
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 150%;
`;
export const StyledCurrentSideNavBarList = styled.div`
  height: 48px;
  width: 240px;
  padding-left: 16px;
  font-size: 16px;
  color: ${colors.darkgray};
  background-color: ${colors.white};
  display: flex;
  gap: 18px;
  text-align: right;
  align-items: center;
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 150%;
`;

export const StyledSideNavBarFooter = styled.div`
  padding-left: 16px;
  height: 236px;
  width: 180px;
  font-size: 10px;
  background-color: ${colors.backgroundDark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 32px;
  padding-top: 288px;
`;
export const StyledFrame49 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 180px;
  height: 290px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #616161;
`;
export const StyledDivCohort = styled.div`
  width: 125px;
  height: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #616161;
`;

export const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 180px;
  height: 135px;
`;

export const StyledDivFooterText = styled.div`
  width: fit-content;
  height: 16px;
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #616161;
`;

export const StyledSourceCode = styled.div`
  width: 160px;
  height: 56px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 13px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #616161;
  margin-top: 1rem;
`;
export const StyledSideLogo = styled.div`
  display: flex;
  padding-left: 16px;
  padding-bottom: 32px;
`;

function SideNavBarRecru() {
  return (
    <StyledSideNavBar>
      <StyledSideLogo>
        <img src={require("../Img/logo.png")} alt="logo" />
      </StyledSideLogo>
      <StyledSideNavBarMenu>
        <Link to="/JobPostings" style={{ textDecoration: "none" }}>
          <StyledCurrentSideNavBarList>
            <BiBriefcase size={20} />
            Job Postings
          </StyledCurrentSideNavBarList>
        </Link>
        <Link to="/CreateNewJob" style={{ textDecoration: "none" }}>
          <StyledSideNavBarList>
            <HiOutlineDocumentAdd size={20} />
            Your applications
          </StyledSideNavBarList>
        </Link>
        <Link to="/MyProfile" style={{ textDecoration: "none" }}>
          <StyledSideNavBarList>
            <BiUser size={20} />
            Profile
          </StyledSideNavBarList>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledSideNavBarList>
            <BiLogOutCircle size={20} />
            Log out
          </StyledSideNavBarList>
        </Link>
        <StyledSideNavBarFooter>
          <StyledFrame49>
            <div>© 2022 - Get That Job</div>
            <StyledDivCohort>Codeable - Cohort 7 Final Project</StyledDivCohort>
            <StyledTeam>
              Build with ❤ by:
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Dik Solis
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Jorge Solis
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Fatima Gallardo
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Cielo Farromeque
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                José Becerril
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Felix Palacios
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                José Luis Tordoya
              </StyledDivFooterText>
            </StyledTeam>
            <StyledSourceCode>
              Source code:
              <StyledDivFooterText>
                <img src={ruby} alt="Ruby" />
                Ruby on Rails REST API
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={react} alt="React" />
                React Responsive SPA
              </StyledDivFooterText>
            </StyledSourceCode>
          </StyledFrame49>
        </StyledSideNavBarFooter>
      </StyledSideNavBarMenu>
    </StyledSideNavBar>
  );
}

export default SideNavBarRecru;
