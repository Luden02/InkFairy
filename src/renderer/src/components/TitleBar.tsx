import { ArrowLeftIcon, CogIcon, FeatherIcon } from './icons'

type TitleBarProps = {
  showingSettings: boolean
  onToggleSettings: () => void
}

function TitleBar({ showingSettings, onToggleSettings }: TitleBarProps): React.JSX.Element {
  return (
    <div className="titlebar">
      <div className="titlebar-brand">
        <FeatherIcon />
        <span>InkFairy</span>
      </div>
      <button
        className="titlebar-action"
        onClick={onToggleSettings}
        title={showingSettings ? 'Back to shelf' : 'Settings'}
      >
        {showingSettings ? <ArrowLeftIcon /> : <CogIcon />}
      </button>
    </div>
  )
}

export default TitleBar
