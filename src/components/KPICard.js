import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #CDD5DF;
  text-align: left;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background: #002bc5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: #555;
  font-weight: 400;
`;

const Value = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  line-height: 32px;
`;

const KPICard = ({ icon, title, value }) => {
  return (
    <Card>
      <IconContainer>
        <Icon src={icon} alt={`${title} Icon`} />
      </IconContainer>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Card>
  );
};

export default KPICard;
