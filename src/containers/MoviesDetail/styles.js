import styled from "styled-components";


export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  z-index: -1;
`;


export const Container = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 40px 20px;
  display: flex;
  gap: 40px;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
  align-items: flex-start; 
`;


export const Cover = styled.div`
  flex-shrink: 0;
  width: 300px;

  img {
    width: 100%;
    border-radius: 15px;
  }
`;


export const Info = styled.div`
  flex: 1;
  color: #ffffff;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  position: relative;

  h2 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 20px 0;
  }

 button {
    width:200px;
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 16px;
  color: #ffffff;
  background: #000000;
  border: 2px solid #ff4500;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;

 
  box-shadow: 0 0 10px rgba(255, 69, 0, 0.6),
              0 0 20px rgba(255, 69, 0, 0.4);

  &:hover {
    box-shadow: 0 0 15px rgba(255, 69, 0, 0.9),
                0 0 30px rgba(255, 69, 0, 0.7);
    transform: scale(1.05);
  }
}

`;
