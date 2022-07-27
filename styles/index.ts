import { createGlobalStyle } from 'styled-components'
import reboot from './reboot'
import reveal from './reveal'
import component from './component'
import sectioning from './sectioning'
import utilities from './utilities'

export const GlobalStyle = createGlobalStyle`
    ${reboot}
    ${reveal}
    ${component}
    ${sectioning}
    ${utilities}
`