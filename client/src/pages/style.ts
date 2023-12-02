import { url } from "inspector";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  padding-left: 142px;
  margin-top: 55px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const HeadH1 = styled.p`
  color: ${(props) => props.theme.colors.TitleHeader};
  font-weight: 500;
  font-size: 45px;
  font-style: Dm Sans;
`;

export const Options = styled.div`
  display: flex;
  gap: 67px;
  align-items: center;
`;
export const Text = styled.text`
  font-weight: 700;
  font: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  display: flex;
  gap: 67px;
  text-decoration: none;
`;

export const List = styled.datalist`
  display: flex;
  gap: 67px;
  list-style-type: none;
`;
export const a = styled.link`
  text-decoration: none;
`;
export const HeadButton = styled.button`
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 62px;
  padding-right: 62px;
  background-color: #3a4cf1;
  border-radius: 10px;
  border: none;
`;

export const ButtonText = styled.text`
  color: white;
`;
