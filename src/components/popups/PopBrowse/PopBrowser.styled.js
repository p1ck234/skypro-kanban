import styled, { css } from "styled-components";
import { topicStyles } from "../../../lib/topic";
import { TopicText } from "../../card/Card.styled";
import { Hover01, Hover03 } from "../../../styles/shared";

export const PopBrowseStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: fixed; /* Change from 'relative' to 'fixed' */
  top: 50%; /* Position it at the vertical center */
  left: 50%; /* Position it at the horizontal center */
  transform: translate(-50%, -50%); /* Adjust to center the modal */
  z-index: 7;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;
export const StatusPsubTtlP = styled.div`
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;
export const StatusThemesDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 7px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;

  letter-spacing: 0em;
  text-align: center;

  /* width: Fixed (136px)px;
height: Hug (30px)px;
padding: 10px 14px 10px 14px;
gap: 0px;
border-radius: 24px 0px 0px 0px;
opacity: 0px;
background: #94A6BE; */
`;
export const StatusThemeInput = styled.div``;
export const StatusThemeLabel = styled.div`
  display: inline-block;
  height: 50px;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;

  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;
  background-color: ${({ $color }) =>
    topicStyles[$color]?.backgroundColor || "#94A6BE"};

  ${TopicText} {
    color: ${({ $color }) => topicStyles[$color]?.color || "#FFFFF"};
  }

  &:hover {
    opacity: 100%;
  }
  /* display: inline-block;
width: 101px;
height: 10px;
gap: 0px;
opacity: 0px;
font-family: Roboto;
font-size: 14px;
font-weight: 400;
text-align: center;
color: #000; */
`;
export const StatusThemeActiveDiv = styled.div`
  width: 136px;
  height: 30px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  padding: 10px 14px 10px 14px;
  background: rgb(148, 166, 190);
`;

export const BtnEdit = styled.div``;
export const BtnBrowseDiv = styled.div``;
export const PopBrowseBtnExit = styled.div``;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBroweTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowseStatusTitle = styled.p`
  margin-top: 14px;
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #94a6be;
  background: #d5dce6;
  margin-right: 7px;
`;

export const PopBrowseStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopBrowseStatusTheme = css`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormBrowseTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const ThemeDownCategories = styled.div`
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const PopBrowseButtonBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      height: 40px;
      width: 100%;
      margin-right: 0px;
    }
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      margin-right: 0px;
    }
  }
`;

export const ButtonChengeDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  a {
    color: #565eef;
  }
  ${Hover03}
`;

export const ButtonClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  ${Hover01}
`;
export const OpenedCardTheme = styled.div`
  display: inline-block;
  width: 180px;
  height: 50px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  padding: 10px 14px 10px 14px;

  cursor: pointer;

  ${({ isactived }) =>
    isactived &&
    css`
      opacity: 1;
      background-color: #94a6be;
      color: #fff;
    `}

  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "##ffffff"};
  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 24px;

  ${TopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  }
`;

export const PopBroweColor = styled.div`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  width: 115px;
  height: 30px;
  border-radius: 24px;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${TopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  }
  margin-right: 7px;
`;
