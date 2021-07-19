import { useState } from 'react'
import withHooks from 'src/common/withHooks'
import NavigationTemplate from './NavigationTemplate'

type LinkDatatype = { url: string; name: string }

interface NavigationDataInterface {
  linkData: LinkDatatype[]
}

const Navigation = withHooks(
  NavigationTemplate,
  ({ linkData }: NavigationDataInterface) => {
    const [isItTrue, setIsItTrue] = useState<Boolean>(false)
  },
)

export default Navigation
