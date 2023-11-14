'use client'

import { LiteLogo } from '@/components/noti3'

import { useTheme } from '@/providers/ui.provider'

export default function App() {
  const { theme } = useTheme()
  return (
    <div className="w-full h-full card bg-base-200 p-4 rounded-box flex flex-col gap-4 justify-center items-center">
      <LiteLogo theme={theme} className="h-24" />
      <span className="text-center text-7xl md:text-9xl font-bold ">
        Coming soon
      </span>
      <h5 className="text-center opacity-60">
        noti3: The tool to develop your web3 user engagement and retention.
      </h5>
    </div>
  )
}
