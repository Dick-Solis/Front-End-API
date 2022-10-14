import colors from "../../styles/colors";
import styled from "@emotion/styled";
import manufactoring from "../pic/manufactoring.svg";
import calendar from "../pic/calendar.svg";
import salary from "../pic/salary.svg";
import { StyledFollowButton } from "../Buttons/Buttons";
import following from "../pic/following.svg";
import { StyledSeeMoreButton } from "../Buttons/Buttons";

export const StyledCard = styled.div`
  height: 170px;
  width: 290px;
  border-radius: 8px;
  padding: 16px;
  background-color: ${colors.white};
`;

export const StyledContainer = styled.div`
  height: 138px;
  width: 258px;
  left: 16px;
  top: 16px;

  flex-direction: column;
`;

export const StyledLogoTitle = styled.div`
  width: 258px;
  height: 82px;
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

export const StyledCompanyInformationContainer = styled.div`
  height: 82px;
  width: 170px;
  display: flex;
  flex-direction: column;
`;

export const StyledCategoryDiv = styled.div`
  height: 16px;
  width: 106px;
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: ${colors.lightGray};
  align-items: center;
`;

export const StyledSvg = styled.img`
  height: 12.5px;
  width: 11.25px;
`;

export const StyledTitleDiv = styled.div`
  height: 46px;
  width: 170px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledCompanyNameDiv = styled.div`
  height: 18px;
  width: 170px;
  font-size: 14px;
  color: ${colors.gray};
`;
export const StyledTypeSalaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  width: fit-content;
  padding: 5.25px 0px 0px 0px;
  gap: 17.25px;
`;
export const StyledTypeDiv = styled.div`
  display: flex;
  height: 16px;
  width: 70px;
  font-size: 12px;
  color: ${colors.lightGray};
  gap: 5.25px;
`;
export const StyledSalaryDiv = styled.div`
  height: 16px;
  width: 84px;
  display: flex;
  gap: 5.25px;
  font-size: 12px;
  color: ${colors.lightGray};
`;

export const StyledCardFooter = styled.div`
  height: 40px;
  width: 258px;
  display: flex;
  flex-direction: row;
  gap: 37px;
  padding: 16px 16px;
`;

export function CroftsCardForm(props) {
  return (
    <StyledCard key={props.id}>
      {console.log(props.props)}
      <StyledContainer>
        <StyledLogoTitle>
          <img src={require("../CompanyLogos/crofts.png")} alt="crofts" />
          <StyledCompanyInformationContainer>
            <StyledCategoryDiv>
              <StyledSvg src={manufactoring} alt="Manufact" />
              Category
            </StyledCategoryDiv>
            <StyledTitleDiv>
              <StyledCompanyNameDiv>{props.job_title}</StyledCompanyNameDiv>
            </StyledTitleDiv>
            <StyledTypeSalaryDiv>
              <StyledTypeDiv>
                <img src={calendar} alt="Type Logo" />
                {props.types}
              </StyledTypeDiv>
              <StyledSalaryDiv>
                <img src={salary} alt="Salary Logo" />
                {props.min_salary} - {props.max_salary}
              </StyledSalaryDiv>
            </StyledTypeSalaryDiv>
          </StyledCompanyInformationContainer>
        </StyledLogoTitle>
        <StyledCardFooter>
          <StyledFollowButton>
            <img src={following} alt="Follow Logo" />
            FOLLOW
          </StyledFollowButton>
          <StyledSeeMoreButton>SEE MORE</StyledSeeMoreButton>
        </StyledCardFooter>
      </StyledContainer>
    </StyledCard>
  );
}

export default CroftsCardForm;

// return (
//   <StyledCardContainer>
//     <ContainerInformation>
//       <ContentImage>{image}</ContentImage>
//       <ContainerDescription>
//         <div>
//           <StyledCategory>{category}</StyledCategory>
//           <StyledJobTitle>{jobTitle}</StyledJobTitle>
//           <StyledCompanyName>{companyName}</StyledCompanyName>
//         </div>
//         <div>
//           <StyledTypeJob>{typeJob}</StyledTypeJob>
//           <StyledSalary>
//             {salaryMin}k - {salaryMax}k
//           </StyledSalary>
//         </div>
//       </ContainerDescription>
//     </ContainerInformation>
//     <div>
//       <StyledFollowButton />
//       <StyledCardContainer />
//     </div>
//   </StyledCardContainer>
// );
// }
