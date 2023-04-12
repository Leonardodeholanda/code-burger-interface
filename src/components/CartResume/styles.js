import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .containerTop {
    display: grid;
    grid-gap: 10px 100px;
    grid-template-areas:
      'title title'
      'items itemsPrice'
      'deliveryTax deliveryPrice';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }
    .items {
      grid-area: items;
    }
    .itemsPrice {
      grid-area: itemsPrice;
    }
    .deliveryTax {
      grid-area: deliveryTax;
    }
    .deliveryPrice {
      grid-area: deliveryPrice;
    }
  }

  .containerBottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`
