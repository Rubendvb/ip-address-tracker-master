import axios from 'axios'

import { AddressProps } from '../@types/address'

const api_url = 'https://geo.ipify.org/api/v2'
const api_ip = 'https://api.ipify.org'

export const getAddress = async (ip: string) => {
  try {
    const response = await axios.get<AddressProps | null>(
      `${api_url}/country,city?apiKey=${
        import.meta.env.VITE_KEY
      }&ipAddress=${ip}`
    )

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Error fetching data')
  }
}

export const getIp = async () => {
  const response = await axios.get(api_ip)

  return response
}
