import { FunctionComponent } from 'react'
import { Box, BoxProps } from '@mui/material'
import * as React from 'react'
interface IProps extends BoxProps{
  children: React.ReactNode
}
const BaseBox: FunctionComponent<IProps> = (props) => (
  <Box {...props}>{props.children}</Box>
)

export default BaseBox
