import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2rem;
  font-weight: bold;
`;

const CameraView = () => {
  return <PageContainer>Camera View Page</PageContainer>;
};

export default CameraView;
