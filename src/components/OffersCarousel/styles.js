import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;

  .rec-carousel-item {
    width: 210px;
  }
  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`
export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 120%;
    color: #424242;
  }
`

export const Image = styled.img`
  width: 200px;
  border-radius: 20px;
  margin-bottom: 5px;
`

export const Button = styled.button`
  margin-top: 13px;
  background: #9758a6;
  border-radius: 8px;
  height: 30px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
