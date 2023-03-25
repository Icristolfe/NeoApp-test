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

export const ContainerItems = styled.div`
  background: ${secondaryColor};
  padding: 30px;
  width: 60vw;
  align-items: center;
  display: grid;
  grid-template-areas: 
    "header"
    "content";
  grid-gap: 10px;

  h1 {
    color: ${textColor};
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
  border-bottom: 1px solid #b5b5b5;
  text-align: center;


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
      opacity: 0.9
    }

    button:active {
      opacity: 0.6
}
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
    color: ${textColor} ;
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`