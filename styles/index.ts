import { createGlobalStyle } from 'styled-components'
import reboot from './reboot'
import reveal from './reveal'
import component from './component'

export const GlobalStyle = createGlobalStyle`
    ${reboot}
    ${reveal}
    ${component}
`