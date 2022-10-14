import colors from "../../styles/colors";
import styled from "@emotion/styled";

export const StyledDropbtn = styled.button`
  border-color: ${colors.pink};
  color: ${colors.lightGray};
  padding: 16px;
  font-size: 16px;
  border: none;
`;
export const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
`;
export const StyledDropContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${colors.darkPink};
  min-width: 160px;

  z-index: 1;
`;
export const StyledDropContentA = styled.a`
  color: ${colors.gray};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

function DropDownBtn() {
  return (
    <StyledDropDown>
      <StyledDropbtn>22</StyledDropbtn>
      <StyledDropContent>
        <StyledDropContentA href="#">Link 1</StyledDropContentA>
        <StyledDropContentA href="#">Link 2</StyledDropContentA>
        <StyledDropContentA href="#">Link 3</StyledDropContentA>
      </StyledDropContent>
    </StyledDropDown>
  );
}
export default DropDownBtn;
