import { useState } from 'react'

function SettingsView(): React.JSX.Element {
  const [kindleEmail, setKindleEmail] = useState('')

  return (
    <div className="settings">
      <div className="settings-title">Settings</div>

      <div className="settings-field">
        <label className="settings-label">Save converted books to</label>
        <div className="settings-row">
          <input className="settings-input" readOnly value="~/Documents/InkFairy" />
          <button className="settings-choose">Choose…</button>
        </div>
        <div className="settings-help">
          Drag this folder onto your Kindle when it&apos;s plugged in via USB.
        </div>
      </div>

      <div className="settings-field">
        <label className="settings-label">Kindle email (optional)</label>
        <input
          className="settings-input"
          placeholder="you@kindle.com"
          value={kindleEmail}
          onChange={(e) => setKindleEmail(e.target.value)}
        />
        <div className="settings-help">
          Lets InkFairy send books straight to your Kindle over Wi-Fi, no cable needed.
        </div>
      </div>
    </div>
  )
}

export default SettingsView
