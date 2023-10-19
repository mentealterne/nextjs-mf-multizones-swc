import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <h1> Booking area homepage app </h1>
  )
}

export function getServerSideProps() {
  return {
    props: {

    }
  }
}
