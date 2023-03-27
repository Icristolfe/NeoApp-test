import styled from 'styled-components'

const secondaryColor = "#000000";
const textColor = "#FFFFFF";

export const Container = styled.div`
  background: ${secondaryColor};
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    color: rgb(255, 255, 255);
    padding: 10px 20px;
    border-left: 1px solid rgb(255, 255, 255);
    border-right: 1px solid rgb(255, 255, 255);
    width: 31%;

    .cupons {
      margin-top: 10px;
      display: flex;
      flex-direction: row;

      input {
        padding-left: 5px;
        background: ${secondaryColor};
        color: ${textColor};
        height: 30px;
        border-radius: 10px;
        border: 1px solid rgb(255, 255, 255);
      }
    }

  .container {
  
  & > h2 {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 15px;
  }

  & > p.items-price,
  & > p.delivery-tax-price {
    text-align: right;
  }

  & > .container-bottom {
    padding: 0;
    margin: 30px 0;
    justify-content: space-between;
    & > p:first-child {
      font-weight: 700;
    }
  }
}


  div {
    display: flex;
    flex-direction: column;
  }

  .container-top {
    display: grid;
    grid-template-areas:
      'title title'
      'items items'
      'delivery-tax delivery-tax-price';
    grid-gap: 10px 50px;
  }

  .title {
    grid-area: title;
    margin-bottom: 20px;
    font-weight: 500;
    border-bottom: 1px solid ${textColor};
    padding-bottom: 5px;
    text-align: center;
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: ${textColor};
    padding: 0 28px 5px 24px;
    margin: 30px 0;
    gap: 10px;
    border-bottom: 1px solid ${textColor};
  }

  @media only screen and (max-width: 600px) {
    .container-top {
      grid-template-areas:
        'title'
        'items'
        'items-price'
        'delivery-tax'
        'delivery-tax-price';
      grid-gap: 10px;
    }
  }

  @media only screen and (max-width: 480px) {
    width: 98%;
    padding: 20px;


    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    
    .container-top {
      grid-template-areas:
        'title'
        'items-price'
        'items'
        'delivery-tax-price'
        'delivery-tax';
      grid-gap: 5px;
    }

    .items {
      font-size: 12px;
    }


  .items-price {
    grid-area: items-price;
    font-style: normal;
    font-weight: 300;
    text-align: center;
    border-bottom: 1px solid ${textColor};
    padding-bottom: 5px;
  }

  .delivery-tax {
    grid-area: delivery-tax;
    font-style: normal;
    font-weight: 300;
    border-bottom: 1px solid ${textColor};
    padding-bottom: 5px;
  }

  .delivery-tax-price {
    grid-area: delivery-tax-price;
    font-style: normal;
    font-weight: 300;
    text-align: center;
    border-bottom: 1px solid ${textColor};
    padding-bottom: 5px;
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: ${textColor};
    padding: 0 28px 5px 24px;
    margin: 30px 0;
    gap: 10px;
    border-bottom: 1px solid ${textColor};
  }

}

.items-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${textColor};
  margin-bottom: 10px;
}

.delivery-price{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${textColor};
}

`
