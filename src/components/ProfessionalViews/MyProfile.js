import styled from "@emotion/styled";
import colors from "../../styles/colors";
import SideNavBarForm from "../NavBars/SideNavBar";
import { StyledChooseFileButton } from "../Buttons/Buttons";
import chooseFile from "../pic/chooseFile.svg";
import { StyledSaveButton } from "../Buttons/Buttons";
export const StyledSonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
  width: 100%;
  background-color: ${colors.background};
  padding: 32px 360px;
  & h1 {
    font-family: Montserrat;
    font-size: 34px;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0.25px;
    text-align: left;
    padding-bottom: 10px;
    color: ${colors.darkgray};
  }
`;
export const StyledPersonalInformationDiv = styled.div`
  height: 365px;
  width: 960px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 8px;
  & h2 {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    padding-bottom: 8px;
    color: ${colors.darkgray};
  }
`;
export const StyledPeronalInputsDiv = styled.div`
  height: 312px;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  & div {
    height: 52px;
    width: 380px;
    display: flex;
    flex-direction: column;
  }
`;
export const StyledInputLabel = styled.label`
  height: 12px;
  width: fit-content;
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-align: left;
  color: ${colors.darkgray};
`;
export const StyledInputPersonalInformation = styled.input`
  height: 36px;
  width: 380px;
  border-color: ${colors.pink};
  border-radius: 8px;
  padding: 8px;
  align-items: center;
`;

export const StyledSpecificationLabel = styled.label`
  //styleName: Regular/Caption;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  padding-bottom: 4px;
  color: ${colors.lightGray};
`;

export const StyledProfessionalInformationDiv = styled.div`
  height: 629px;
  width: 960px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & h3 {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    color: ${colors.darkgray};
  }
  & p {
    //styleName: Regular/Caption;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4000000059604645px;
    text-align: left;
  }
`;
export const StyledProfessionalInput = styled.input`
  height: 256px;
  width: 760px;
  border-radius: 8px;
  padding: 8px;
  border-color: ${colors.pink};
`;
export const StyledProfessionalExperienceInput = styled.textarea`
  height: 256px;
  width: 760px;
  border-radius: 8px;
  padding: 8px;
  border-color: ${colors.pink};
`;
export const StyledProfessionalEducationInput = styled.textarea`
  height: 116px;
  width: 760px;
  border-radius: 8px;
  padding: 8px;
  border-color: ${colors.pink};
`;
export const StyledChooseFileDiv = styled.div`
  height: 36px;
  width: 235px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  //styleName: Regular/Body2;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  align-items: center;
  color: ${colors.gray};
`;

function MyProfile() {
  return (
    <>
      <SideNavBarForm />
      <StyledSonContainer>
        <h1>Profile</h1>
        <StyledPersonalInformationDiv>
          <h2>Personal Information</h2>
          <StyledPeronalInputsDiv>
            <div>
              <StyledInputLabel>EMAIL</StyledInputLabel>
              <StyledInputPersonalInformation type="Text" />
            </div>
            <div>
              <StyledInputLabel>NAME</StyledInputLabel>
              <StyledInputPersonalInformation type="Text" />
            </div>
            <div>
              <StyledInputLabel>PHONE</StyledInputLabel>
              <StyledInputPersonalInformation type="Text" />
              <StyledSpecificationLabel>
                +[country code][number]
              </StyledSpecificationLabel>
            </div>
            <div>
              <StyledInputLabel>BIRTHDATE</StyledInputLabel>
              <StyledInputPersonalInformation type="Text" />
            </div>
            <div>
              <StyledInputLabel>LINKEDIN URL</StyledInputLabel>
              <StyledInputPersonalInformation type="Text" />
            </div>
          </StyledPeronalInputsDiv>
        </StyledPersonalInformationDiv>
        <StyledProfessionalInformationDiv>
          <h3>Professional Information</h3>
          <p>Changes made here will be reflected in your future applications</p>
          <StyledInputLabel>TITLE</StyledInputLabel>
          <StyledInputPersonalInformation type="Text" />
          <StyledInputLabel>PROFESSIONAL EXPERIENCE</StyledInputLabel>
          <StyledProfessionalExperienceInput type="Text" />
          <StyledInputLabel>EDUCATION</StyledInputLabel>
          <StyledProfessionalEducationInput type="Text" />
          <StyledInputLabel>Upload/Update your CV</StyledInputLabel>
          <StyledChooseFileDiv>
            <StyledChooseFileButton>
              <img src={chooseFile} alt="choose a file" />
              Choose a file
            </StyledChooseFileButton>
            <p>No file chosen</p>
          </StyledChooseFileDiv>
          <StyledSpecificationLabel>
            Only PDF. Max size 5MB
          </StyledSpecificationLabel>
          <StyledSaveButton>SAVE CHANGES</StyledSaveButton>
        </StyledProfessionalInformationDiv>
      </StyledSonContainer>
    </>
  );
}
export default MyProfile;
