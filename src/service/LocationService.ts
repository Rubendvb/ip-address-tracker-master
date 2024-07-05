import axios from 'axios'

import { AddressProps } from '../@types/address'

const api_url = 'https://geo.ipify.org/api/v2'

export const getAddress = async (ip: string) => {
  try {
    const response = await axios.get<AddressProps | null>(
      `${api_url}/country,city?apiKey=${import.meta.env.VITE_KEY}</p>
      )}&ipAddress=${ip}`
    )

    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
