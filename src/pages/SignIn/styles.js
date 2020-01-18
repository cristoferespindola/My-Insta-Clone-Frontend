import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  text-align: center;
  background-color: #fff;
  margin: 200px 0;
  padding: 10px 30px;
  border: solid 1px #e6e6e6;
  border-radius: 4px;

  ${props =>
    props.textTop &&
    css`
      text-align: center;
      margin: 22px auto 12px;
      border: 0;
    `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: #fafafa;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 3px;
  padding: 14px 0 2px 8px !important;
  font-size: 12px;
  line-height: 18px;
  color: var(--i1d, #262626);
`;

export const Button = styled.button`
  margin: 10px 0 80px 0;
  border: 0 solid #000;
  border-radius: 4px;
  height: 28px;
  font-size: 15px;
  background: #3897f0;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;

export const Span = styled.span`
  color: #262626;
  font-size: 14px;
  margin: 0 0 30px 0;
  text-align: center;

  ${props =>
    props.register &&
    css`
      text-decoration: none;
      color: #3897f0;
      font-weight: 600;
    `}
`;
