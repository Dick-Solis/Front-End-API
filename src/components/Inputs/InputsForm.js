import colors from "../../styles/colors";
import styled from "@emotion/styled";
import { useState } from "react";
import { StyledLogInButton } from "../Buttons/Buttons";
import { useAuth } from "../../context/auth-context";

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
const ContainerButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-self: flex-end;
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

  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e){
    e.preventDefault();
    login(formData)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email</Label>
      <StyledInput
        onChange={handleChange}
        value={formData.email}
        type="email"
        name="email"
        placeholder="some.user@gmail.com"
      />
      <Label htmlFor="password">Password</Label>
      <StyledInput
        onChange={handleChange}
        value={formData.password}
        name="password"
        type="password"
        placeholder="******"
      />
      <ContainerButton>
        <StyledLogInButton type="submit">Login</StyledLogInButton>
      </ContainerButton>
    </Form>
  );
}

export default InputsForm;
