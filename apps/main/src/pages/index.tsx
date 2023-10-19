import { Inter } from 'next/font/google'
import { sum } from '@rad/libraries'
const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  console.log(sum(1,2))
  return (
    <>
      <h1>HOME PAGE</h1>
      <h2>Button from shared packages:</h2>
      <a href="/booking-area">Switch to booking area app</a>
    </>
  )
}
export function getServerSideProps() {
  return {
    props: {

    }
  }
}
