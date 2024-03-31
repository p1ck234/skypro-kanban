import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;
    ::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
    & a {
      color: #ffffff;
    }
  }
`;

export const AfterHeaderUser = css`
&::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565eef;
  border-bottom: 1.9px solid #565eef;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
`;

export const HoverCellDay = css`
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;
