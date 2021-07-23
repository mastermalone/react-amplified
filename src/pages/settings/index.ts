import withHooks, { mapHooksToProps } from '../../common/withHooks'
import SettingsPageTemplate from './SettingsPageTemplate'

const SettingsPage = withHooks(
  SettingsPageTemplate,
  mapHooksToProps(() => {
    return {}
  }),
)

export default SettingsPage
