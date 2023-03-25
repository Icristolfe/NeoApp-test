import styled from 'styled-components';


const rareColor = "#00FFFF"
const secondaryColor = "#000000";
const textColor = "#FFFFFF";

export const Container = styled.div`
  background: ${secondaryColor};
  background-size: cover;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  .rare-border {
  border: 2px solid ${rareColor};
  box-shadow: 0 0 20px 0 ${rareColor};
}

  .align-title {
    width: 60%;

    @media(max-width: 768px) {
      width: 60%;
    }

    @media(max-width: 480px) {
      width: 60%;
    }
  }

  .align-desc {
    width: 65%;
    margin: 30px 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    font-size: 14px;

    @media(max-width: 768px) {
      width: 40%;
    }

    @media(max-width: 480px) {
      width: 40%;
    }
  }

  h1 {
    font-size: 20px;
    margin-bottom: 30px ;
    color: ${textColor};
    text-align: center;

    @media(max-width: 480px) {
      font-size: 16px;
    }
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 8px;

    @media(max-width: 768px) {
      width: 60%;
      height: auto;
    }

    @media(max-width: 480px) {
      width: 60%;
    }
  }

  .button-container {
    width: 50%;
    height: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
      width: 80%;
    }

    @media(max-width: 480px) {
      width: 90%;
    }
  }
`

export const ContainerItems = styled.div`
    background: ${secondaryColor};
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100vw;
    height: 100vh;
    align-items: center;

    @media(max-width: 768px) {
      padding: 20px;
    }

    @media(max-width: 480px) {
      padding: 10px;
    }
`