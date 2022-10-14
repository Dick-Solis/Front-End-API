import colors from "../../styles/colors";
import styled from "@emotion/styled";

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
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

function InputsForm() {
  return (
    <Form>
      <Label htmlFor="name">Name</Label>
      <StyledInput id="name" type="text" placeholder="John Doe" />
      <Label htmlFor="phone">PHONE</Label>
      <StyledInput id="phone" type="number" placeholder="+XXXXXXXXX" />
      <Label htmlFor="birthdate">BIRTHDATE</Label>
      <StyledInput id="birthdate" type="date" placeholder="Pick a date" />
      <Label htmlFor="linkedinurl">LINKEDIN URL</Label>
      <StyledInput
        id="linkedinurl"
        type="text"
        placeholder="https://www.linkedin.com/in/username"
      />
    </Form>
  );
}

export default InputsForm;
