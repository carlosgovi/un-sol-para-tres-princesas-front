import styled from "styled-components";

export const EmailInput = styled.input`
  text-align: center;
  font-size: 24px;
  margin-top: 100px;
  width: 290px;
  height: 80px;
  border: none;
  border-radius: 16px;
  ::placeholder {
    color: #ababab;
    font-weight: bold;
    text-align: center;
  }
`;
export const ClaveInput = styled(EmailInput)``;
