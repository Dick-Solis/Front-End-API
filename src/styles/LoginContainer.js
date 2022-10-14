import styled from "@emotion/styled";

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function LoginContainer(props) {
  return <WrapperContainer>{props.children}</WrapperContainer>;
}

export default LoginContainer;
