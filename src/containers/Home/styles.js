import styled from 'styled-components';
const mainColor = "#FF0000";
const secondaryColor = "#000000";
const textColor = "#FFFFFF";
const lightTextColor = "#CCCCCC";



export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${secondaryColor};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
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
      transition: all 0.2s ease-in-out;
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 0, 0, 0.2);
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .content {
    padding: 20px;

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
      color: ${secondaryColor};
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
      font-size: 18px;
      color: ${mainColor};
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
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${textColor};

  img {
    width: 500px;
    height: 500px;
  }
`;
