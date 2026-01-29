import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 220px;        
    height: 330px;       
    object-fit: cover;  
    border-radius: 20px;
    display: block;
  }

  h3 {
    margin-top: 12px;
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    max-width: 220px;
  }

  img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

`;
