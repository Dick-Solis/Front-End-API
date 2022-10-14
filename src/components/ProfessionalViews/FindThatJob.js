import styled from "@emotion/styled";
import colors from "../../styles/colors";
import SideNavBarForm from "../NavBars/SideNavBar";
// import BabySwimCardForm from "../Cards/BabySwimCard";
import { useEffect, useState } from "react";
import { getJobs } from "../../service/jobServices";
import CroftsCardForm from "../Cards/CroftsCardForm";

export const StyledFindThatContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: row;
`;
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
  }
`;
const FindThatLabel = styled.label`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 1.5px;
  text-align: left;
  color: ${colors.gray};
  padding-bottom: 4px;
  padding-top: 6px;
`;
const StyledSearchInput = styled.input`
  height: 36px;
  width: 419.9270935058594px;
  border-radius: 8px;
  padding: 8px;
`;
const StyledSelectDiv = styled.div`
  height: 52px;
  width: 960px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const StyledSelect = styled.select`
  height: 36px;
  width: 280px;
  border-radius: 8px;
  padding: 8px;
  border-color: ${colors.pink};
  color: ${colors.gray};
`;

const StyledFirstSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StyledSecondSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StyledThirdSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StyledSalaryRangeDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 36px;
  width: 231px;
  gap: 8px;
  align-items: center;
  font-size: 30px;
  color: ${colors.lightGray};
`;
const StyledSalaryInput = styled.input`
  height: 31px;
  width: 102px;
  border-radius: 8px;
  border-color: ${colors.pink};
  padding-left: 20px;
  position: relative;
  text-align: left;
  font-size: 14px;
`;
const StyledResultsContainer = styled.div`
  height: 780px;
  width: 960px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & h2 {
    padding-top: 24px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
  }
`;

export const StyledRowCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 170px;
  width: 934px;
  justify-content: space-between;
`;

function FindThatJob() {
  const [allJobs, SetAllJobs] = useState([]);

  console.log(allJobs);
  useEffect(() => {
    getJobs()
      .then((response) => SetAllJobs(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <StyledFindThatContainer>
      <SideNavBarForm />
      <StyledSonContainer>
        <h1>Find That Job</h1>
        <FindThatLabel>SEARCH BY JOB TITLE OR COMPANY NAME</FindThatLabel>
        <StyledSearchInput placeholder="manufacturing, sales, swim" />
        <StyledSelectDiv>
          <StyledFirstSelectDiv>
            <FindThatLabel>CATEGORY</FindThatLabel>
            <StyledSelect id="Category">
              <option value="PlaceHolder">Select a Category</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Legal">Legal</option>
              <option value="Education">Education</option>
              <option value="Goverment">Goverment</option>
              <option value="Sales">Sales</option>
            </StyledSelect>
          </StyledFirstSelectDiv>
          <StyledSecondSelectDiv>
            <FindThatLabel>TYPE</FindThatLabel>
            <StyledSelect id="Category">
              <option value="PlaceHolder">Select a Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Half Time">Half Time</option>
            </StyledSelect>
          </StyledSecondSelectDiv>
          <StyledThirdSelectDiv>
            <FindThatLabel>SALARY</FindThatLabel>
            <StyledSalaryRangeDiv>
              <StyledSalaryInput type={Text} placeholder=" $ Min $ " />-
              <StyledSalaryInput type={Text} placeholder=" $ Max $ " />
            </StyledSalaryRangeDiv>
          </StyledThirdSelectDiv>
        </StyledSelectDiv>
        <StyledResultsContainer>
          <h2>{allJobs.length} jobs for you</h2>
          <StyledRowCardContainer>
            {allJobs.map((job) => {
              // console.log(job);
              return <CroftsCardForm props={job} />;
              // return (
              //   <div key={job.id}>
              //     <h2>{job.job_title}</h2>
              //   </div>
              // );
            })}
          </StyledRowCardContainer>
        </StyledResultsContainer>
      </StyledSonContainer>
    </StyledFindThatContainer>
  );
}
export default FindThatJob;
