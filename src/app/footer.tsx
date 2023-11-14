import { LiteLogo } from '@/components/noti3'

export default function Footer() {
  return (
    <div className="w-full flex flex-auto gap-2 p-4 items-center border-t-2 border-base-300">
      <LiteLogo className="h-4 text-black dark:text-white" />
      <p className="text-sm">noti3 © 2023, All Rights Reserved.</p>
      <div className="flex-auto" />
    </div>
  )
}
