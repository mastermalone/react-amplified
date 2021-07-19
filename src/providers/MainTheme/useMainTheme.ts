import { useContext } from 'react'
import { ThemeContext, ThemeInterface } from './mainTheme'

const useMainTheme = (): ThemeInterface => useContext(ThemeContext)

export default useMainTheme
