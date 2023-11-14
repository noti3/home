'use client'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers/ui.provider'
import { FullLogo } from '@/components/noti3'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="w-full flex flex-row gap-2 p-4 items-center">
      <a href="/">
        <FullLogo className="h-6 text-black dark:text-white" />
      </a>
      <div className="flex-auto" />
      <button
        className="btn btn-ghos btn-circle btn-sm"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
            checked={theme === 'dark'}
          />
          <p className="swap-on">
            <Moon className="w-5 h-5" />
          </p>
          <p className="swap-off">
            <Sun className="w-5 h-5" />
          </p>
        </label>
      </button>
    </div>
  )
}
