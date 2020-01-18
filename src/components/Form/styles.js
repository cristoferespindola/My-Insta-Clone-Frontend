import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }

  #desc {
    font-size: 16px;
    font-weight: 600;
  }

  form textarea {
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  form button {
    margin-top: 10px;
    flex-shrink: 0;
    padding: 6px;
    background: #fafafa;
    border: 1px solid rgba(0, 0, 0, 0.0975);
    display: block;
    color: #003569;
    font-weight: 600;
    font-size: 13px;
    border-radius: 4px;
  }

  label span {
    font-size: 12px;
    font-weight: normal;
    color: #999;
  }

  form h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }

  #photo {
    margin-bottom: 20px;
    border: 1px dashed #ddd;
    background-size: cover;
    cursor: pointer;
    width: 400px;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #photo input {
    display: none;
  }

  .icon {
    color: #ddd;
  }

  .error {
    margin: 10px 0 15px 0;
    text-align: center;
    color: red;
  }
`;
