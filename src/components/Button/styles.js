import styled from 'styled-components'

export const ButtonLink = styled.a`
  position: relative;
  display: inline-block;
  color:${props => props.start ? "#00FFFF" : " #FF0000"} ;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.2s;
  letter-spacing: 5px;
  font-weight: 900;
  width: ${(props) => props.width || "30px"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "none"};
  cursor: pointer;
  margin-top: ${props => (props.add ? "15px" : "0")};
  height: ${(props) => props.size || "15px"};
  padding: 0 10px;

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
