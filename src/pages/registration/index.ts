import { useEffect, useState } from 'react'
import withHooks, { mapHooksToProps } from '../../common/withHooks'
import RegistrationPageTemplate from './RegistrationPageTemplate'

const RegistrationPage = withHooks(
  RegistrationPageTemplate,
  mapHooksToProps(() => {
    const [state, setState] = useState()

    const fetchData = async () => {
      //Do stuff
    }

    useEffect(() => {}, [])

    return {
      state,
    }
  }),
)

export default RegistrationPage
