import { Inter } from 'next/font/google'
import { PlainButton } from '@rad/design-system'
import { sum } from '@rad/libraries'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(sum(1,2))
  return (
    <>
      <h1>HOME PAGE</h1>
      <h2>Button from shared packages:</h2>
      <PlainButton />
    </>
  )
}
