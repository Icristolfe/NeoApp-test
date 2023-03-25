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


  .rare-border {
  border: 2px solid ${rareColor};
  box-shadow: 0 0 20px 0 ${rareColor};
}
  
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
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1;
  color: ${textColor};
  padding-top: 15px;
   backdrop-filter: blur(10px);
  opacity: 0.9;

  .selected-comic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 40%;
    max-width: 350px;
    height: 60%;
    max-height: 900px;
    margin: 0 auto;
    overflow-y: none;

    img {
      width: 100%;
      height: 70%;
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

