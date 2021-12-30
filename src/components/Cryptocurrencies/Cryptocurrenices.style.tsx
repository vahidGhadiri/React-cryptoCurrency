import styled from "styled-components";
import {Col, Input, Row, Spin} from "antd";

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

export const SearchBox = styled(Input)`
  margin: 20px auto 30px auto;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px !important;
`