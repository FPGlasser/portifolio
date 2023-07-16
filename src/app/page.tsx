import Image from 'next/image'
import { Header } from '@/components'

export default function Home() {
  return (
    <main className="bg-ui-bg font-poppins flex min-h-screen flex-col items-center">
      <div className="max-w-[1100px] w-full">
        <Header/>
      </div>
    </main>
  )
}
