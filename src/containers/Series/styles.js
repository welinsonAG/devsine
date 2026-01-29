import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: -1;
`;
