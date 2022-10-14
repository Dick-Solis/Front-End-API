import colors from "../../styles/colors";
import styled from "@emotion/styled";

export const StyledCreateAccountButton = styled.button`
  height: 56px;
  width: 264px;
  left: 582px;
  top: 331px;
  border-radius: 16px;
  padding: 16px 24px 16px 24px;
  background-color: ${colors.pink};
  font-size: 15px;
  font-weight: 500;
  color: ${colors.white};
  letter-spacing: 1.25px;
  border: none;
  cursor: pointer;
`;

export const StyledLogInButton = styled.button`
  height: 40px;
  width: 80px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  background-color: ${colors.pink};
  font-size: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-weight: 500;
  color: ${colors.white};
  border: none;
  cursor: pointer;
`;

export const StyledNextButton = styled.button`
  display: flex;
  height: 42px;
  width: 106px;
  left: 127px;
  top: 204px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  background-color: ${colors.pink};
  gap: 8px;
  font-size: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-weight: 500;
  color: ${colors.white};
  border: none;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
export const StyledFinishButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 116px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  background-color: ${colors.pink};
  font-size: 12px;
  color: ${colors.white};
  align-items: center;
  letter-spacing: 1.25px;
  gap: 16px;
  border: none;
`;

export const StyledSkipButton = styled.button`
  height: 40px;
  width: 115px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  background-color: ${colors.background};
  border-color: ${colors.pink};

  font-size: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-weight: 500;
  color: ${colors.black};
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const StyledChooseFileButton = styled.button`
  display: flex;
  height: 36px;
  width: fit-content;
  border-radius: 8px;
  padding: 8px;
  background-color: ${colors.pink};
  gap: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  color: #ffffff;
  border: none;
`;

export const StyledPreviousButton = styled.button`
  display: flex;
  width: 131px;
  height: 40px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  gap: 8px;
`;

export const StyledCurrentNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 66.6667px;
  background-color: ${colors.pink};
`;

export const StyledNotCurrentNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 66.6667px;
  background-color: ${colors.gray};
`;

export const StyledRadioButton = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 50px;
  border-color: ${colors.pink};
  position: relative;
`;

export const StyledCurrentRadioButton = styled.button`
  height: 12px;
  width: 12px;
  left: 4px;
  top: 4px;
  border-radius: 50px;
  background-color: ${colors.pink};
  position: absolute;
`;

export const StyledSeeMoreButton = styled.button`
  height: 40px;
  width: 112px;
  left: 146px;
  border-radius: 16px;
  padding: 8px 16px 8px 25px;
  border-color: ${colors.pink};
  display: flex;
  text-align: center;
  align-items: center;
  color: ${colors.gray};
`;

export const StyledFollowButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${colors.white};
  padding-top: 16px;
`;

export const StyledApplyNowButton = styled.button`
  height: 56px;
  width: 173px;
  top: 12px;
  border-radius: 16px;
  padding: 16px 24px 16px 24px;
  background-color: ${colors.pink};
  display: flex;
  align-items: center;
`;

export const StyledCloseButton = styled.button`
  height: 40px;
  width: 116px;
  left: 134px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  background-color: ${colors.darkPink};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledShowButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${colors.white};
`;
export const StyledMarkStartedButton = styled.button`
  height: 40px;
  width: 180px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  border-color: ${colors.pink};
  align-items: center;
`;

export const StyledDownLoadButton = styled.button`
  height: 40px;
  width: 183px;
  left: 288.5px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  background-color: ${colors.white};
  border-color: ${colors.pink};
  display: flex;
  align-items: center;
`;

export const StyledUpdateProfileButton = styled.button`
  height: 40px;
  width: 165px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  background-color: ${colors.pink};
  align-items: center;
`;
export const StyledDeclineButton = styled.button`
  height: 40px;
  width: 242px;
  left: 422.5px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  background-color: ${colors.darkPink};
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const StyledPostJobButton = styled.button`
  height: 40px;
  width: 153px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  align-items: center;
  background-color: ${colors.pink};
`;

export const StyledSaveButton = styled.button`
  height: 40px;
  width: 155px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  align-items: center;
  background-color: ${colors.pink};
  border: none;
  color: ${colors.white};
`;
export const StyledAppliedButton = styled.button`
  height: 40px;
  width: 98px;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  border: none;
  background-color: ${colors.backgroundDark};
  color: ${colors.lightGray};
`;
