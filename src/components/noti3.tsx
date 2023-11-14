import { type CSSProperties } from 'react'

export type LogoProps = {
  theme?: Theme
  className?: string
  style?: CSSProperties
}

const src = {
  lite: {
    light: '/black-short-logo.png',
    dark: '/white-short-logo.png',
  },
  full: {
    light: '/black-long-logo.png',
    dark: '/white-long-logo.png',
  },
}

export function LiteLogo({
  theme = 'light',
  className = 'h-6',
  style = {},
}: LogoProps) {
  return (
    <a className={className} style={style} href="/">
      <img className="h-full" src={src.lite[theme]} alt="noti3" />
    </a>
  )
}

export function FullLogo({
  theme = 'light',
  className = 'h-6',
  style = {},
}: LogoProps) {
  return (
    <a className={className} style={style} href="/">
      <img className="h-full" src={src.full[theme]} alt="noti3" />
    </a>
  )
}
