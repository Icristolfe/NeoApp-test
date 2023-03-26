import styled from 'styled-components';

const mainColor = "#FF0000";
const rareColor = "#00FFFF"
const secondaryColor = "#000000";
const textColor = "#FFFFFF";
const lightTextColor = "#CCCCCC";



export const Container = styled.div`
  background: ${secondaryColor};
  display: flex;
  flex-direction: column;
  z-index: 1;
  


  .rare-border {
  border: 2px solid ${rareColor};
  box-shadow: 0 0 20px 0 ${rareColor};
}
  
`;

export const ContainerItems = styled.div`
  background: ${secondaryColor};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 25px;
  padding: 20px;
   
`


export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${secondaryColor};
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  color: ${lightTextColor};
  gap: 35px;
  transition: box-shadow 0.2s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0 0 20px 0 ${props => props.rare ? "#00FFFF" : "#FF0000"};
  }

  .thumbnail {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      max-height: 80%;
      max-width: 80%;
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
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
  color: ${textColor};
  padding-top: 15px;
    overflow: auto;


  &&::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
}

  .selected-comic {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    height: 60vh;
    max-height: 900px;
    overflow: none;
    border-radius: 30%;
    margin-top: 20px;

 @media(max-height: 480px) { /* Mobile */
    
        width: 90%;
        max-width: 90%;
        max-height: none;
        overflow: none;
      
    }
   

    img {
      width: 50%;
      height: 60%;
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
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 10px;
    
      @media(max-width: 480px) { /* Mobile */
      
      justify-content: flex-start
}


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
      max-width: 350px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    @media(max-width: 767px) { /* Mobile */
      .selected-comic {
        width: 100%;
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


export const OverlayTop = styled.div`

`


export const OverlayBottom = styled.div`

`