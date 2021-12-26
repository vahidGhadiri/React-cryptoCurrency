import styled from "styled-components";
import {Typography} from "antd";

interface PropsInterface {
    kind?: string
}


const handleTitleKind = (kind: Pick<PropsInterface, "kind">) => {
    const kinds = {
        "title": "1.1rem !important",
        "subtitle": ".8rem !important",
        "default": "1rem !important"
    }
    // @ts-ignore
    return kinds[kind] || kinds["default"]
}


export const Container = styled(Typography.Title)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`

export const Title = styled(Typography.Title)<Pick<PropsInterface, "kind">>`
  font-size: ${(props: any) => handleTitleKind(props.kind)};
  font-weight: bold !important;
`

