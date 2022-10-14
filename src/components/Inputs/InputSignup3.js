import colors from "../../styles/colors";
import styled from "@emotion/styled";

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  & p {
    margin-top: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    &:nth-of-type(1) {
      margin-bottom: 8px;
    }
  }
`;

const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
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
  &:nth-of-type(3) {
    margin-bottom: 1.5rem;
  }
`;

const TextAreaInput = styled.textarea`
  background: ${colors.white};
  width: 600px;
  padding: 8px;
  height: 76px;
  text-align: start;
  border-radius: 8px;
  border-color: ${colors.pink};
  font-size: 14px;
`;

function InputsForm() {
  return (
    <Form>
      <Label htmlFor="title">Title</Label>
      <StyledInput
        id="title"
        type="text"
        placeholder="Mechanical administrator"
      />
      <Label htmlFor="experience">professional experience</Label>
      <TextAreaInput
        id="experience"
        type="textarea"
        placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
      />
      <p>Between 300 and 2000 characters</p>
      <Label htmlFor="education">Education</Label>
      <TextAreaInput
        id="education"
        type="textarea"
        placeholder="Major in life experiences with a PHD in procrastination..."
      />
      <p>Between 100 and 2000 characters</p>
    </Form>
  );
}

export default InputsForm;
