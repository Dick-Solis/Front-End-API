import colors from "../../styles/colors";
import styled from "@emotion/styled";
import { StyledChooseFileButton } from "../Buttons/Buttons";
import chooseFile from "../pic/chooseFile.svg";
import { StyledFinishButton } from "../Buttons/Buttons";
import { StyledSkipButton } from "../Buttons/Buttons";
import right from "../pic/right.svg";

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
const RecomendationLabel = styled.label`
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  color: ${colors.lightGray};
  padding-bottom: 0.5rem;
`;

export const StyledRecomendationDiv = styled.div`
  width: 380px;
  height: 24px;
  font-family: "Inter";
  font-size: 10px;
  color: ${colors.gray};
  font-weight: 400;
  margin-bottom: 1rem;
`;
export const StyledAboutCompanyDiv = styled.div`
  height: 76px;
  width: 600px;
  border-radius: 8px;
`;
export const StyledUploadh1 = styled.div`
  height: 12px;
  width: 180px;
  font-family: "Inter";
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.5px;
  padding: 4px;
  color: ${colors.darkgray};
  display: flex;
`;

export const StyledAboutCompanyInput = styled.input`
  height: 60px;
  width: 584px;
  border-color: ${colors.pink};
  border-radius: 8px;
  padding: 0.5rem;
  padding-bottom: 3rem;
`;

const StyledInput = styled.input`
  background: ${colors.white};
  width: 356px;
  padding: 8px;
  height: 36px;
  border-radius: 8px;
  border-color: ${colors.pink};
  font-size: 14px;
  &:nth-of-type(1) {
    margin-bottom: 1.5rem;
  }
  &:nth-of-type(2) {
    margin-bottom: 1.5rem;
  }
`;
export const StyledFileInputDiv = styled.div`
  height: 72px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const StyledFileInputBox = styled.div`
  display: flex;
  height: 36px;
  width: 240px;
  gap: 4px;
  padding-top: 8px;
`;
export const StyledLabelFile = styled.label`
  height: 20px;
  width: 98px;
  font-family: "Inter";
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  padding: 8px;
  color: ${colors.gray};
`;

export const StyledLabelPDF = styled.label`
  height: 16px;
  width: 146px;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  border-radius: nullpx;
  color: ${colors.lightGray};
  padding: 8px;
`;
export const StyledButtonsDiv = styled.div`
  height: 40px;
  width: 247px;
  margin: 0 auto;
  padding-top: 16px;
`;

function InputSignupRec2() {
  return (
    <Form>
      <StyledRecomendationDiv>
        You can complete this information later but we <br></br> reccomend you
        to do it now
      </StyledRecomendationDiv>
      <Label htmlFor="companywebsite">COMPANY WEBSITE</Label>
      <StyledInput id="companywebsite" placeholder="https://www.mycompany.sa" />
      <Label htmlFor="companyresume">About the company</Label>
      <StyledAboutCompanyDiv>
        <StyledAboutCompanyInput
          id="aboutcompany"
          placeholder=" My Company SA has the vision to change thw way how..."
        />
        <RecomendationLabel htmlFor="recomendation">
          Between 100 and 2000 characters
        </RecomendationLabel>
        <StyledFileInputDiv>
          <StyledUploadh1>Upload the company logo</StyledUploadh1>
        </StyledFileInputDiv>
        <StyledFileInputBox>
          <StyledChooseFileButton>
            <img src={chooseFile} alt="choose a file" />
            Choose a file
          </StyledChooseFileButton>
          <StyledLabelFile>No file chosen</StyledLabelFile>
        </StyledFileInputBox>
        <StyledLabelPDF>Only PDF. Max size 5MB</StyledLabelPDF>
        <StyledButtonsDiv>
          <StyledSkipButton>SKIP THIS!</StyledSkipButton>
          <StyledFinishButton>
            FINISH <img src={right} alt="right" />
          </StyledFinishButton>
        </StyledButtonsDiv>
      </StyledAboutCompanyDiv>
    </Form>
  );
}

export default InputSignupRec2;
