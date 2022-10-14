import styled from "@emotion/styled";
import colors from "../../styles/colors";
import SignupContainer from "../../styles/SignupContainer";
import InputSignup2 from "../Inputs/InputSignup2";
import women from "../Img/women.svg";
import { StyledNextButton, StyledSkipButton } from "../Buttons/Buttons";
import { Link } from "react-router-dom";

const WrapperSingUp = styled.div`
  display: flex;
  justify-content: center;
  gap: 86px;
  margin-top: 40px;
  margin-right: auto;
`;

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-items: center;
  width: 100%;
  height: 359px;
  width: 359px;

  & div {
    display: flex;
    flex-direction: column;
    & h1 {
      color: ${colors.darkgray};
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 59px;
      letter-spacing: 5px;
    }
    & p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 2rem;
    }
    & div {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
      & h3 {
        font-size: 1.5rem;
        border-bottom: 2px solid ${colors.pink};
      }
    }
  }
`;

const ContainerSteps = styled.div`
  display: flex;
  width: 470px;
  height: 60px;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
`;

const DivContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div {
    & p {
      background-color: ${colors.pink};
      width: 32px;
      height: 32px;
      border-radius: 66.6667px;
      text-align: center;
      color: white;
      font-size: 20px;
    }
    & span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.5px;
    }
  }
`;

const InfoSteps = styled.div`
  margin-top: 1.5rem;
  display: flex;
  width: 380px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #616161;
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const ContainerPhoto = styled.div`
  display: flex;
  height: 567px;
  width: 560px;
  position: relative;
  left: 300px;
  top: 290px;
  & div {
    & img {
      position: absolute;
      top: 50px;
    }
  }
`;

function Signup2() {
  return (
    <WrapperSingUp>
      <SignupContainer>
        <SignupFormContainer>
          <div>
            <h1>Good choice!</h1>
            <p>Create a new account as...</p>
            <div>
              <h3>PROFESSIONAL</h3>
              <h3>RECRUITER</h3>
            </div>
          </div>

          <ContainerSteps>
            <DivContainer>
              <div>
                <p>1</p>
                <span>
                  DONE!
                  <br />
                  Login
                  <br />
                  information
                </span>
              </div>
              <div>
                <p>2</p>
                <span>
                  IN PROGRESS!
                  <br />
                  Login
                  <br />
                  information
                </span>
              </div>
              <div>
                <p>3</p>
                <span>
                  PENDING!
                  <br />
                  Professional
                  <br />
                  information
                </span>
              </div>
            </DivContainer>
          </ContainerSteps>
          <InfoSteps>
            <span>
              You can complete this information later but we
              <br /> recomend you to do it now
            </span>
          </InfoSteps>
          <InputSignup2 />
          <ContainerButton>
            <div>
              <StyledSkipButton>skip this!</StyledSkipButton>
              <Link to="/signup3">
                <StyledNextButton>Next </StyledNextButton>
              </Link>
            </div>
          </ContainerButton>
        </SignupFormContainer>
        <ContainerPhoto>
          <div>
            <img src={women} alt="" />
          </div>
        </ContainerPhoto>
      </SignupContainer>
    </WrapperSingUp>
  );
}

export default Signup2;
