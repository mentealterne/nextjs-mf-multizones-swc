/** @type {import('next').NextConfig} */

const { BOOKING_AREA_URL } = process.env
const MAIN_URL = 'http://localhost:3000'

module.exports = {

  trailingSlash:false,
  async rewrites() {
    return[{
      source:'/booking-area',
      destination:`${BOOKING_AREA_URL}/booking-area`
    },
    {
      source: '/booking-area/:match*',
      destination: `${BOOKING_AREA_URL}/booking-area/:match*`,
    },

    ]
  },

}
