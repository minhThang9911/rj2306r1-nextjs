import { Html, Head, Main, NextScript } from 'next/document'
import Toolbar from './views/Toolbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Toolbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
