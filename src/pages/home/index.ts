import { useEffect, useState } from 'react'
import withHooks from 'src/common/withHooks'
import HomePagetemplate from './HomePageTemplate'

const HomePage = withHooks(HomePagetemplate, () => {
  const [booleanVal, setBolleanVal] = useState<number>()
  useEffect(() => {
    console.log('Home Page Loaded')

    setBolleanVal(1)
    console.log('booleanVal', booleanVal)
  }, [])
})

export default HomePage
