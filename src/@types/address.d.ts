export interface AddressProps {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: string
    lng: string
    postalCode: string
    timezone: string
    geonameId: string
  }
  isp: string
}
