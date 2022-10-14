import styled from "@emotion/styled";
import colors from "../../styles/colors";
import LoginContainer from "../../styles/LoginContainer";
import InputsForm from "../Inputs/InputsForm";
import MenPhoto from "../Img/MenPhoto";

const WrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 86px;
  margin-top: 132px;
  margin-left: 318px;
  margin-right: 120px;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 359px;
  width: 359px;
  /* margin: 196px 763px 345px 318px; */
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

function Login() {
  return (
    <WrapperLogin>
      <LoginContainer>
        <LoginFormContainer>
          <div>
            <h1>Welcome Back</h1>
            <p>Login to you account as...</p>
            <div>
              <h3>PROFESSIONAL</h3>
              <h3>RECRUITER</h3>
            </div>
          </div>

          <InputsForm />
        </LoginFormContainer>
        <MenPhoto />
      </LoginContainer>
    </WrapperLogin>
  );
}

export default Login;
