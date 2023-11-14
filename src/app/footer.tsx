'use client'

import { LiteLogo } from '@/components/noti3'

import { useTheme } from '@/providers/ui.provider'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <div className="w-full flex flex-auto gap-2 p-4 items-center border-t-2 border-base-300">
      <LiteLogo theme={theme} className="h-4" />
      <p className="text-sm">noti3 © 2023, All Rights Reserved.</p>
      <div className="flex-auto" />
    </div>
  )
}