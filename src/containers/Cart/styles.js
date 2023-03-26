import styled from 'styled-components';


const rareColor = "#00FFFF"
const secondaryColor = "#000000";
const textColor = "#FFFFFF";

export const Container = styled.div`
  background: ${secondaryColor};
  background-size: cover;
  color: ${textColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  .rare-border {
    border: 2px solid ${rareColor};
    box-shadow: 0 0 20px 0 ${rareColor};
  }
`
export const ContentItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 10px;
  padding: 40px 0 ;

  @media only screen and (max-width: 480px) {
    
    padding: 10px;
    width: 90vw;
    flex-direction: column;
  }

`


export const ContainerItems = styled.div`
  background: ${secondaryColor};
  padding: 30px;
  width: 60vw;
  padding: 10px 20px;
    border-left: 1px solid rgb(255, 255, 255);
    border-right: 1px solid rgb(255, 255, 255);
  align-items: center;
  display: grid;
  grid-template-areas: 
    "header"
    "content";
  grid-gap: 10px;
  overflow: auto;
  height: 70%;
  


  &&::-webkit-scrollbar {
  width: 0px;
  background-color: transparent;
}

  h1 {
    color: ${textColor};
  }

  @media only screen and (max-width: 768px) {
    
    padding: 10px;
    width: 90vw;
  }
`

export const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  grid-area: header;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  text-align: center;

  p {
    font-size: 16px;
    color: ${textColor};
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
  }
`

export const CartContainer = styled.div`
  background: ${secondaryColor};
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  grid-gap: 10px 15px;
  border-bottom: 1px solid ${textColor};
  text-align: center;

  .rare {
    color: #00FFFF
  }

  .quantity-container {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      color: ${textColor} ;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.9;
    }

    button:active {
      opacity: 0.6;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
    grid-gap: 5px;
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`