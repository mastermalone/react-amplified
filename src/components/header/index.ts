import { useCallback } from 'react'
import { MouseEventHandler } from 'react'
import withHooks, { mapHooksToProps } from 'src/common/withHooks'
import { ThemeType } from 'src/providers/MainTheme/mainTheme'
import useMainTheme from 'src/providers/MainTheme/useMainTheme'
import HeaderTemplate from './headerTemplate'

type LinkType = {
  text: string
  link: string
}

type MouseEventType = MouseEventHandler<HTMLButtonElement>

export interface HeaderProps {
  headerLinks: LinkType[]
  setThemeValue: MouseEventHandler<HTMLButtonElement> | undefined
  theme: ThemeType
}

const Header = withHooks(
  HeaderTemplate,
  mapHooksToProps(({ headerLinks, setThemeValue }: HeaderProps) => {
    const { setTheme, theme } = useMainTheme()

    setThemeValue = useCallback<MouseEventType>(() => {
      console.log('theme', theme)
      const themeType = theme === 'light' ? 'dark' : 'light'
      setTheme(themeType)
    }, [setTheme, theme])

    return {
      headerLinks: headerLinks ? headerLinks : [{ text: 'Home', link: '/' }],
      setThemeValue,
      theme,
    }
  }),
)

export default Header
