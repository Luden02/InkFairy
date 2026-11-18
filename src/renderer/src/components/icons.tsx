type IconProps = {
  size?: number
}

export function FeatherIcon({ size = 16 }: IconProps): React.JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M20 4c-6 0-14 3-14 12 0 2 1 4 3 4 9 0 12-8 12-14 0-1 0-2-1-2Z" strokeWidth="1.6" />
      <path d="M9 19 20 4" strokeWidth="1.6" />
    </svg>
  )
}

export function SparkleIcon({ size = 14 }: IconProps): React.JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />
    </svg>
  )
}

export function UploadIcon({ size = 36 }: IconProps): React.JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 15V4m0 0 4 4m-4-4-4 4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function XIcon({ size = 14 }: IconProps): React.JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M5 5 19 19M19 5 5 19" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ size = 12 }: IconProps): React.JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M5 13l4 4 10-10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CogIcon({ size = 16 }: IconProps): React.JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="m10.3 2.6-.5 2a1 1 0 0 1-.7.7 6.9 6.9 0 0 0-1.5.6 1 1 0 0 1-1 0l-1.8-1-1.9 1.9 1 1.8a1 1 0 0 1 0 1 6.9 6.9 0 0 0-.6 1.5 1 1 0 0 1-.7.7l-2 .5v2.7l2 .5a1 1 0 0 1 .7.7 6.9 6.9 0 0 0 .6 1.5 1 1 0 0 1 0 1l-1 1.8 1.9 1.9 1.8-1a1 1 0 0 1 1 0c.47.26.98.46 1.5.6a1 1 0 0 1 .7.7l.5 2h2.7l.5-2a1 1 0 0 1 .7-.7 6.9 6.9 0 0 0 1.5-.6 1 1 0 0 1 1 0l1.8 1 1.9-1.9-1-1.8a1 1 0 0 1 0-1c.26-.47.46-.98.6-1.5a1 1 0 0 1 .7-.7l2-.5v-2.7l-2-.5a1 1 0 0 1-.7-.7 6.9 6.9 0 0 0-.6-1.5 1 1 0 0 1 0-1l1-1.8-1.9-1.9-1.8 1a1 1 0 0 1-1 0 6.9 6.9 0 0 0-1.5-.6 1 1 0 0 1-.7-.7l-.5-2z"
      />
      <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
    </svg>
  )
}

export function ArrowLeftIcon({ size = 16 }: IconProps): React.JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M19 12H5m0 0 6-6m-6 6 6 6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
