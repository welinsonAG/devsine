import styled, { css } from "styled-components";

const buttonStyles = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 21px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }
`;

export const PrimaryButton = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background: #ff0000;
    color: #ffffff;
  }
`;

export const SecondaryButton = styled.button`
  ${buttonStyles}
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 35px;
`;
