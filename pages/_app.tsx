import { ReactNode } from 'react'
import '../styles/index.css'

type Props = {
    Component?: any
    pageProps?: ReactNode
}

const App = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />
}

export default App