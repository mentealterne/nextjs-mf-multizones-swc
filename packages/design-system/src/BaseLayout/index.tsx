import { FunctionComponent, ReactNode } from 'react'
import { AppBar, Button, Container, createTheme, CssBaseline, GlobalStyles, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { BaseLink } from '../index'
import * as React from 'react'
interface IProps {
  children: ReactNode
}

const defaultTheme = createTheme()

const BaseLayout:FunctionComponent<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Multizones w turbo and shared packages
          </Typography>
          <nav>
            <BaseLink
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Link
            </BaseLink>
            <BaseLink
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Link
            </BaseLink>
            <BaseLink
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Link
            </BaseLink>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Link
          </Button>
        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        {children}
      </Container>
      <Container

        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
          position:'fixed',
          bottom:0,
          background:'white',
          maxWidth:'100vw!important',
          color:'black',
          left:0
        }}
      >
        Footer
      </Container>
    </ThemeProvider>
  )
}

export default BaseLayout
