import styled from "styled-components";

export const Container = styled.div`
  min-height: 100px;

  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;

  background-color: ${(props) =>
    props.$changeBackground ? "#000" : "transparent"};
    transition: all 0.7s ease-in-out;

  img {
    width: 25%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Li = styled.li`
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    height: 3px;
    width: ${(props) => (props.$isActive ? "100%" : "0%")};
    background-color: #0ed443;
    position: absolute;
    margin-top: 39px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
