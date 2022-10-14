import styled from "@emotion/styled";

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function SignupContainer(props) {
  return <WrapperContainer>{props.children}</WrapperContainer>;
}

export default SignupContainer;
