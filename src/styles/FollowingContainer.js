import styled from "@emotion/styled";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
`;

function FollowingContainer(props) {
  return <WrapperContainer>{props.children}</WrapperContainer>;
}

export default FollowingContainer;
