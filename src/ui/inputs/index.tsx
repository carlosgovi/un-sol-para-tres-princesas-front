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
export const GenericInput = styled(EmailInput)`
  margin: 5px;
  :focus {
    outline: none;
    background-color: #5d55ff48;
    color: white;
    transition: all 0.3s ease-in-out;
    border: solid 2px #ffffffa7;
  }
`;
export const SearchInput = styled(EmailInput)`
  color: white;
  background-color: #4498d9be;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  transition: all 0.3s ease-in-out;
  animation: 0.3s;
  font-size: 30px;
  ::placeholder {
    color: #ffffffa7;
    font-weight: bold;
    text-align: center;
  }
  :focus {
    outline: none;
    background-color: #4498d9f5;
    color: white;
    border: solid 4px #ffffffa7;
  }
`;
