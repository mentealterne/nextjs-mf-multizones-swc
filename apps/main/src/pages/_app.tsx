import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BaseLayout } from '@rad/design-system'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />

    </BaseLayout>
  )
}
