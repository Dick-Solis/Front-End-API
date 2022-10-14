import colors from "../../styles/colors";
import styled from "@emotion/styled";
import manufactoring from "../pic/manufactoring.svg";
import calendar from "../pic/calendar.svg";
import salary from "../pic/salary.svg";
import { StyledFollowButton } from "../Buttons/Buttons";
import following from "../pic/following.svg";
import { StyledSeeMoreButton } from "../Buttons/Buttons";

const StyledCardContainer = styled.div`
  width: 290px;
  height: 170px;
  border: 1px solid #e1e2e1;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const ContentImage = styled.div`
  height: 75px;
  width: 75px;
`;

const ContainerInformation = styled.div`
  display: flex;
  gap: 10px;
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const InformationJob = styled.div``;

const StyledCategory = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8e8e8e;
`;

const StyledJobTitle = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #373737;
`;

const StyledCompanyName = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #616161;
`;

const StyledTypeJob = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const StyledSalary = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export function Card(
  image,
  category,
  jobTitle,
  companyName,
  typeJob,
  salaryMin,
  salaryMax,
  props
) {
  return (
    <StyledCardContainer>
      <ContainerInformation>
        <ContentImage>{image}</ContentImage>
        <ContainerDescription>
          <div>
            <StyledCategory>{category}</StyledCategory>
            <StyledJobTitle>{jobTitle}</StyledJobTitle>
            <StyledCompanyName>{companyName}</StyledCompanyName>
          </div>
          <div>
            <StyledTypeJob>{typeJob}</StyledTypeJob>
            <StyledSalary>
              {salaryMin}k - {salaryMax}k
            </StyledSalary>
          </div>
        </ContainerDescription>
      </ContainerInformation>
      <div>
        <StyledFollowButton />
        <StyledCardContainer />
      </div>
    </StyledCardContainer>
  );
}
