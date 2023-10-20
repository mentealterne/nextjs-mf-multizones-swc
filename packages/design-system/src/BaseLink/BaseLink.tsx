import { FunctionComponent } from 'react'
import { Link, LinkProps } from '@mui/material'
//Todo: find the way to not import react in every component pls
import * as React from 'react'

interface IProps extends LinkProps{
  href:string,
  children:React.ReactNode,
}
const BaseLink:FunctionComponent<IProps> = (props) => {
  return <Link sx={{ color:'white' }} {...props} href={props.href}>{props.children}</Link>
}

export default BaseLink
