import { Inter } from 'next/font/google'
import { sum } from '@rad/libraries'
import { PlainButton, BaseLink } from '@rad/design-system'
import { BaseBox } from '@rad/design-system'
const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  const sumFromExternalLibrary = sum(1, 2)
  return (
    <>

      <BaseBox display={'flex'} flexDirection={'column'} gap={10}>
        <h1>HOME PAGE</h1>

        <PlainButton />
        <BaseLink href={'/booking-area'}>  Go to booking area app</BaseLink>
      </BaseBox>
    </>
  )
}
export function getServerSideProps() {
  return {
    props: {

    }
  }
}
