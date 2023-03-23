import styled from 'styled-components';

const mainColor = "#FF0000";
const secondaryColor = "#000000";
const textColor = "#FFFFFF";
const lightTextColor = "#CCCCCC";



export const Container = styled.div`
  background: ${secondaryColor};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
  padding: 0 20px 20px 20px;
  
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${secondaryColor};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: ${lightTextColor};
  gap: 35px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px 0 #FF0000;
  }

  .thumbnail {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      max-height: 100%;
      max-width: 100%;
      transition: transform 0.2s ease-in-out;
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .content {
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      color: ${textColor};
      font-size: 16px;
      margin-bottom: 10px;
      text-transform: uppercase;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 10px;
      color: ${lightTextColor};
    }

    h3 {
      font-size: 14px;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    .thumbnail {
      height: 200px;
    }

    .content {
      padding: 10px;

      h2 {
        font-size: 18px;
        margin-bottom: 5px;
      }

      p {
        font-size: 14px;
        margin-bottom: 5px;
      }

      h3 {
        font-size: 16px;
      }
    }
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1;
  color: ${textColor};
  padding-top: 30px;

  .selected-comic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 700px;
    height: 100%;
    max-height: 900px;
    margin: 0 auto;
    overflow-y: auto;
    padding: 20px;

    img {
      width: 100%;
      height: auto;
      max-height: 400px;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 20px;
      font-weight: 600;
    }

    .text-content {
      font-size: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column;
      gap: 10px;
    }

    .align-button {
      width: 100%;
      height: min-content;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      margin-top: auto;
    }

    .button-image {
      width: 100%;
      max-width: 400px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-top: 20px;
    }
  }
`;


export const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  color:${mainColor} ;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.2s;
  letter-spacing: 5px;
  font-weight: 900;
  width:${props => ( props.add ? "100%" : "25%")};
  height: ${props => ( props.add ? "40px" : "18px")};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: ${props => (props.add ? "15px" : "0")};


  &:hover {
    opacity:0.8;
    background:${mainColor};
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #FF0000,
                0 0 25px #FF0000,
                0 0 50px #FF0000,
                0 0 100px #FF0000;
    
  }

  &:active{
    opacity: 0.6;
  }

  /*animação do span para criar linhas*/

  span {
    position: absolute;
    display: block;
  }

  /*span 1*/
  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background:  linear-gradient(90deg, transparent, #FF0000);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,100% {
      left: 100%;
    }
  }

  /*span 2*/
  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #FF0000);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,100% {
      top: 100%;
    }
  }

  /*span 3*/
  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #FF0000);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,100% {
      right: 100%;
    }
  }

  /*span 4*/
  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #FF0000);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,100% {
      bottom: 100%;
    }
  }
`;



