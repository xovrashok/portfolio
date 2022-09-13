import styled from "styled-components";

export const Image = styled.img`
  width: 340px;
  border-radius: 405px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Container = styled.div`
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  background: #f3f3f3;
  padding: 30px;
  border-radius: 0 0 10px 10px;
  margin: -10px;
`;

export const ImageContainer = styled.div`
  background-color: #c35b5b;
  text-align: center;
  padding: 20px;
  position: relative;
  border-radius: 10px;
`;

export const Text = styled.text`
  color: white;
  font-size: 25px;
  text-shadow: 1px 1px 2px cadetblue;
`;
