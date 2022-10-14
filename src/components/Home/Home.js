import colors from "../../styles/colors";
import styled from "@emotion/styled";
import { StyledCreateAccountButton } from "../Buttons/Buttons";
import group from "../Img/group.svg";
import searchLogo from "../Img/searchLogo.svg";
import dik from "../Img/dik.svg";
import fatima from "../Img/fatima.svg";
import felix from "../Img/felix.svg";
import jorge from "../Img/jorge.svg";
import cielo from "../Img/cielo.svg";
import josebe from "../Img/josebe.svg";
import joset from "../Img/joset.svg";
import git from "../pic/git.svg";
import linkedin from "../pic/linkedin.svg";
import ruby from "../pic/ruby.svg";
import react from "../pic/react.svg";
import { Link } from "react-router-dom";

export const StyledFatherContainer = styled.div`
  width: 100%;
  height: 833px;
`;
export const StyledSonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1062px;
  height: 737px;
  margin: 0 auto;
  padding: 32px;
  align-items: center;
  gap: 32px;
`;
export const StyledH1 = styled.h1`
  width: 504px;
  height: 148px;
  font-size: 61px;
  font-weight: 300;
  line-height: 74px;
  text-align: center;
`;
export const StyledP = styled.p`
  width: 720px;
  height: 87px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;
export const StyledButtonContainer = styled.div`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
export const StyledSecondSonContainer = styled.div`
  width: 100%;
  height: 472px;
  display: flex;
  flex-direction: row;
  padding: 72px 0px;
`;
export const StyledDarkPinkContainer = styled.div`
  width: 100%;
  height: 472px;
  background-color: ${colors.darkPink};
`;
export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 344px;
  padding: 64px 120px;
  gap: 24px;
`;
export const StyledH1Description = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 58px;
  color: ${colors.white};
`;
export const StyledPDescription = styled.p`
  width: 640px;
  height: 261px;
  color: ${colors.white};
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
`;
export const StyledImageContainer = styled.div`
  display: flex;
  width: 75%;
  height: 472px;
  padding-left: 112px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const StyledThirdSonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 486px;
  background-color: ${colors.background};
  flex-direction: column;
  padding: 120px;
  gap: 26px;
`;
export const StyledThirdTitle = styled.h3`
  width: 356px;
  height: 59px;
  margin: 0 auto;
  color: ${colors.darkPink};
  font-size: 48px;
  font-weight: 400;
  align-items: center;
`;
export const StyledProfileContainer = styled.div`
  width: 1056px;
  height: 273px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 auto;
`;
export const StyledIndividualProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 273px;
  gap: 16px;
`;

export const StyledIndividualName = styled.div`
  width: 168px;
  height: 29px;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
`;
export const StyledDivLinks = styled.div`
  width: 112px;
  height: 40px;
  gap: 53px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding-bottom: 10px;
`;
export const StyledLandingFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 73px;
  align-items: center;
  background-color: ${colors.background};
`;
export const StyledFooterContainer = styled.div`
  width: 1200px;
  height: 73px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  margin: 0 auto;
  border-top: ${colors.darkPink} solid 1px;
`;

export const StyledCreditDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
  height: fit-content;
  text-align: center;
`;
export const StyledResourcesDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
  align-items: center;
`;
export const StyledIndividualResource = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

function Home() {
  return (
    <StyledFatherContainer>
      <StyledSonContainer>
        <StyledH1>
          The place where <br></br> you get that job
        </StyledH1>
        <StyledP>
          With our Machine Learning algorithm you will get that job<br></br> in
          no time. We promise you! Just give us the money and we <br></br> will
          take care of it.
        </StyledP>
        <StyledButtonContainer>
          <Link to="/signup1">
            <StyledCreateAccountButton>
              Create Account Now
            </StyledCreateAccountButton>
          </Link>
        </StyledButtonContainer>
        <img src={group} alt="grupo" />
      </StyledSonContainer>
      <StyledSecondSonContainer>
        <StyledDarkPinkContainer>
          <StyledDescriptionContainer>
            <StyledH1Description>Find your next job</StyledH1Description>
            <StyledPDescription>
              Our Machine learning algorithm is so good that it's even illegal
              in some countries. Join us to use our barely legal algorithm that
              is actually a group of interns that work on our basement.<br></br>
              <br></br>
              We have a job for you, no matter your background or previous
              experience. Is sending random memes through chat your only skill?
              That's ok, we got you, our Rock Star Meme Curator role is here for
              you.
            </StyledPDescription>
          </StyledDescriptionContainer>
        </StyledDarkPinkContainer>
        <StyledImageContainer>
          <Link to="/FindThatJob">
            <img src={searchLogo} alt="Search Logo" />
          </Link>
        </StyledImageContainer>
      </StyledSecondSonContainer>
      <StyledThirdSonContainer>
        <StyledThirdTitle>Meet the team</StyledThirdTitle>
        <StyledProfileContainer>
          <StyledIndividualProfile>
            <img src={dik} alt="Dik" />
            <StyledIndividualName>Dick Solis</StyledIndividualName>
            <StyledDivLinks>
              <img src={git} alt="git" />
              <img src={linkedin} alt="linkedin" />
            </StyledDivLinks>
          </StyledIndividualProfile>
          <StyledIndividualProfile>
            <img src={fatima} alt="Fatima" />
            <StyledIndividualName>Fátima Gallardo</StyledIndividualName>
            <StyledDivLinks>
              <img src={git} alt="git" />
              <img src={linkedin} alt="linkedin" />
            </StyledDivLinks>
          </StyledIndividualProfile>
          <StyledIndividualProfile>
            <img src={felix} alt="Felix " />
            <StyledIndividualName>Felix Palacios</StyledIndividualName>
            <StyledDivLinks>
              <img src={git} alt="git" />
              <img src={linkedin} alt="linkedin" />
            </StyledDivLinks>
          </StyledIndividualProfile>
          <StyledIndividualProfile>
            <img src={jorge} alt="Jorge " />
            <StyledIndividualName>Jorge Solis</StyledIndividualName>
            <StyledDivLinks>
              <img src={git} alt="git" />
              <img src={linkedin} alt="linkedin" />
            </StyledDivLinks>
          </StyledIndividualProfile>
          <StyledIndividualProfile>
            <img src={cielo} alt=" Cielo " />
            <StyledIndividualName>Cielo Ricalde</StyledIndividualName>
            <StyledDivLinks>
              <img src={git} alt="git" />
              <img src={linkedin} alt="linkedin" />
            </StyledDivLinks>
          </StyledIndividualProfile>
          <StyledIndividualProfile>
            <img src={josebe} alt=" Jose Becerril" />
            <StyledIndividualName>José Becerril</StyledIndividualName>
            <StyledDivLinks>
              <img src={git} alt="git" />
              <img src={linkedin} alt="linkedin" />
            </StyledDivLinks>
          </StyledIndividualProfile>
          <StyledIndividualProfile>
            <img src={joset} alt="Jose Tordoya Logo" />
            <StyledIndividualName>José Tordoya</StyledIndividualName>
            <StyledDivLinks>
              <img src={git} alt="git" />
              <img src={linkedin} alt="linkedin" />
            </StyledDivLinks>
          </StyledIndividualProfile>
        </StyledProfileContainer>
      </StyledThirdSonContainer>
      <StyledLandingFooter>
        <StyledFooterContainer>
          <StyledCreditDiv>© 202X - Get That Job</StyledCreditDiv>
          <StyledCreditDiv>
            Source Code:
            <StyledResourcesDiv>
              <StyledIndividualResource>
                <img src={ruby} alt="Ruby" />
                Ruby on Rails REST API
              </StyledIndividualResource>
              <StyledIndividualResource>
                <img src={react} alt="React" />
                React Responsive SPA
              </StyledIndividualResource>
            </StyledResourcesDiv>
          </StyledCreditDiv>
          <StyledCreditDiv>Codeable - Cohort 7 Final Project</StyledCreditDiv>
        </StyledFooterContainer>
      </StyledLandingFooter>
    </StyledFatherContainer>
  );
}
export default Home;
