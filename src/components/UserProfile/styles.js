import styled, { css } from "styled-components";

export const Container = styled.div`
  ${props =>
    props.info &&
    css`
      margin: 44px 75px;
      display: flex;
      flex-direction: row;
      margin-bottom: 44px;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;

      .avatar {
        flex-basis: 0;
        -webkit-box-flex: 1;
        flex-grow: 1;
        img {
          width: auto;
          height: auto;
          margin-bottom: 15px;
        }
      }

      .avatarInline { 
        img{
          width: 25px;
          height: 25px; 
        }      
      }

      section {
        flex-basis: 30px;
        -webkit-box-flex: 2;
        flex-grow: 2;
        color: #262626;
        flex-shrink: 1;
        min-width: 0;
      }

      section .title {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        flex-shrink: 1;
        margin-top: 30px;
        margin-bottom: 20px;
      }

      section .title h3 {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 28px;
        line-height: 32px;
        margin: -5px 0 -6px;
        font-weight: 300;
      }

      section .title button {
        flex-shrink: 0;
        margin-left: 20px;
        padding: 6px;
        background: #fafafa;
        border: 1px solid rgba(0, 0, 0, 0.0975);
        display: block;
        color: #003569;
        font-weight: 600;
        font-size: 13px;
        border-radius: 4px;
      }

      section ul {
        display: flex;
        margin-bottom: 20px;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        list-style: none;
      }

      section ul li {
        margin-left: 0;
        font-size: 16px;
        margin-right: 40px;
        cursor: pointer;
      }

      section .bio {
        font-size: 16px;
        line-height: 24px;
        word-wrap: break-word;
        display: block;
      }

      section .bio h3 {
        font-size: 18px;
        font-weight: 600;
      }

      Modal #modal { 
         display: flex;
      }
     }
    `}
  ${props =>
    props.content &&
    css`
      display: flex;
      flex-direction: column;
      padding-bottom: 0px;
      padding-top: 0px;

      article div {
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding: 0;
        position: relative;
      }

      article span {
        position: absolute;
        right: 0;
        .icon{
          color: #fff;
        }
        .icon:hover{
          cursor: pointer;
        }
      }

      article div.card {
        width: 100%;
        max-height: 239px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
      }
      article div img.postImg {
        height: 239px;
        width: 100%;
      }

      article .empty {
        display: flex;
        text-align: center;
        font-size: 32px;
        color: #ddd;
        font-weight: bold;
        margin-top: 200px;
      }
    `}
    `;

export const Box = styled.div`
  #modal {
    display: flex;
    margin-bottom: 15px;

    img {
      height: 50px;
    }

    #user {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;

      #username {
        margin-bottom: 4px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
      }
      #name {
        font-size: 13px;
        font-weight: 500;
        color: #999;
      }
    }
  }
`;
