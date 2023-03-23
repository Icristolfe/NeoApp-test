import styled from 'styled-components';

const mainColor = "#FF0000";
const rareColor = "#00FFFF"
const secondaryColor = "#000000";
const textColor = "#FFFFFF";
const lightTextColor = "#CCCCCC";



export const Container = styled.div`
  background: ${secondaryColor};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
  padding: 0 20px 20px 20px;


  .rare-border {
  border: 2px solid ${rareColor};
  box-shadow: 0 0 20px 0 ${rareColor};
}
  
`;

export const Start = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  color:${rareColor};
  background-color: #000;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  z-index: 1;
  text-align: center;

  @media(max-width: 767px) { /* Mobile */
  padding: 10%;

      }

@media (min-width: 768px) and (max-width: 1023px) {
  padding: 10%;
      }

  .color {
    width: 10%;
    height: 40px;
    background: ${rareColor};
    margin-bottom: 50px;
  }

  h1 {
    margin-bottom: 50px;
  }

  p { 
    margin-bottom: 20px;
   }


`

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
  padding-top: 15px;

  .selected-comic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 40%;
    max-width: 350px;
    height: 100%;
    max-height: 900px;
    margin: 0 auto;
    overflow-y: none;

    img {
      width: 100%;
      height: auto;
      max-height: 350px;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      color: ${mainColor};
      font-size: 16px;
      line-height: 1.5;
      font-weight: 600;
    }

    .text-content {
      font-size: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column;
      width: 100%;
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
      max-width: 350px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-top: 20px;
    }

    @media(max-width: 767px) { /* Mobile */
      .selected-comic {
        width: 90%;
        max-width: 90%;
        max-height: none;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) { /* Tablet */
      .selected-comic {
        width: 60%;
        max-width: 60%;
        max-height: none;
      }
    }

    @media (min-width: 1024px) { /* Desktop */
      .selected-comic {
        width: 50%;
        max-width: 50%;
      }
    }
  }
`;


export const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  color:${props => props.start ? "#00FFFF" : " #FF0000"} ;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.2s;
  letter-spacing: 5px;
  font-weight: 900;
  width: ${(props) => props.width || "25px"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: ${props => (props.add ? "15px" : "0")};
  height: ${(props) => props.size || "18px"};

@media(max-width: 767px) { /* Mobile */
  width: ${props => props.start ? "60%" : "100%"} ;
  height: 50px;

      }

@media (min-width: 768px) and (max-width: 1023px) {
  width: 100%;
  height: 50px;
      }
    
  &:hover {
    opacity:0.8;
    background: ${props => props.start ? "#00FFFF" : " #FF0000"};
    color:${props => props.start ? "#000" : " #FFF"};
    border-radius: 5px;
    box-shadow:
    0 0 5px ${props => props.start ? "#00FFFF" : " #FF0000"},
    0 0 25px ${props => props.start ? "#00FFFF" : " #FF0000"},
    0 0 50px ${props => props.start ? "#00FFFF" : " #FF0000"},
    0 0 100px ${props => props.start ? "#00FFFF" : " #FF0000"};
    
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
    background:  linear-gradient(90deg, transparent,${props => props.start ? "#00FFFF" : " #FF0000"});
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
    background: linear-gradient(180deg, transparent, ${props => props.start ? "#00FFFF" : " #FF0000"});
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
    background: linear-gradient(270deg, transparent, ${props => props.start ? "#00FFFF" : " #FF0000"});
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
    background: linear-gradient(360deg, transparent, ${props => props.start ? "#00FFFF" : " #FF0000"});
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

