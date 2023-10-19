import { Inter } from 'next/font/google'
import { sum } from '@rad/libraries'
import { PlainButton, BaseLink } from '@rad/design-system'
const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  console.log(sum(1,2))
  return (
    <>
      <h1>HOME PAGE</h1>
      <h2>Button from shared packages:</h2>
      <PlainButton />
      <BaseLink href={'/booking-area'}>Go to booking area app</BaseLink>

    </>
  )
}
export function getServerSideProps() {
  return {
    props: {

    }
  }
}
