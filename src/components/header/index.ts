import { useCallback } from 'react'
import { MouseEventHandler } from 'react'
import useMainTheme from 'src/providers/MainTheme/useMainTheme'
import withHooks, { mapHooksToProps } from '../../common/withHooks'
import { ThemeType } from '../../providers/MainTheme/mainTheme'
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

    const mockHeaderLinks: LinkType[] = [
      {
        text: 'Home',
        link: '/',
      },
      {
        link: '/contact',
        text: 'Contact Us',
      },
      {
        link: '/fun-bits',
        text: 'Fun Bits',
      },
      {
        link: '/people',
        text: 'People',
      },
    ]

    return {
      headerLinks: headerLinks ? headerLinks : mockHeaderLinks,
      setThemeValue,
      theme,
    }
  }),
)

export default Header
