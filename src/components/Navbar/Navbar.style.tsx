import styled from "styled-components";
import {Typography} from "antd";

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  height: 100vh;
  margin: 0;
  background-color: rgb(0, 21, 41);

  @media screen and (max-width: 800px) {
    height: 8vh;
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: var(--bgSecondary);
  }



`

export const LogoContainer = styled.div`
  background-color: #001529;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  width: 100%;
`

export const Logo = styled(Typography.Title)`
  margin: 0 0 0 15px;

  a {
    color: white;
  }
`
// .nav-container {
// height: 8vh;
// position: fixed;
// width: 100%;
// z-index: 100;
// background-color: var(--bgSecondary);
// }