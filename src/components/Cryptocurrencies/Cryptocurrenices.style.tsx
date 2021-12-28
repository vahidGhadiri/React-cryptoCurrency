import styled from "styled-components";
import {Col, Row, Spin} from "antd";

export const CardContainer = styled(Row)`
  min-height: 40vh !important;
`

export const CardWrapper = styled(Col)`
  min-width: 250px;
`

export const CardImage = styled.img`
  width: 35px;
`

export const Spinner = styled(Spin)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 200px;
`