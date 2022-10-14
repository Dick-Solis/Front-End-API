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
`;

function InputsForm() {
  return (
    <Form>
      <Label htmlFor="email">Email</Label>
      <StyledInput name="email" type="email" placeholder="some.user@gmail.com" />
      <Label htmlFor="password">Password</Label>
      <StyledInput name="password" type="password" placeholder="******" />
      <Label htmlFor="password">Password confirmation</Label>
      <StyledInput name="password_confirmation" type="password" placeholder="******" />
    </Form>
  );
}

export default InputsForm;
