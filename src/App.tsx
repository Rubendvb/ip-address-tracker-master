import { useCallback, useEffect, useState } from 'react'

import Form from './components/Form/Form'
import Header from './components/Header/Header'

import { AddressProps } from './@types/address'

import './App.css'
import Map from './components/Map/Map'

function App() {
  const initialState = {
    ip: '',
    location: {
      country: '',
      region: '',
      city: '',
      lat: '',
      lng: '',
      postalCode: '',
      timezone: '',
      geonameId: '',
    },
    isp: '',
  }

  const [objectAddress, setObjectAddress] = useState<AddressProps>(initialState)
  const [position, setPosition] = useState({ lat: 34.08057, lng: -118.07285 })
  const [location, setLocation] = useState('California, US 91770')
  const [isp, setIsp] = useState('SpaceX Starlink')

  const updateLocation = useCallback(() => {
    const { lat, lng, region, country, postalCode } = objectAddress.location
    const { isp } = objectAddress

    if (lat && lng) {
      setPosition({
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      })

      setLocation(`${region ? `${region},` : ''} ${country} ${postalCode}`)
      setIsp(`${isp ? `${isp}` : 'Not isp'}`)
    }
  }, [objectAddress])

  useEffect(() => {
    updateLocation()
    return () => {}
  }, [objectAddress, updateLocation])

  return (
    <>
      <Header />

      <main>
        <Form setObjectAddress={setObjectAddress} />

        <section>
          <div>
            <span>IP Address</span>
            <span>{`${objectAddress.ip || '192.212.174.101'}`}</span>
          </div>
          <div>
            <span>Location</span>
            <span>{location}</span>
          </div>
          <div>
            <span>Timezone</span>
            <span>UTC {objectAddress.location.timezone || '-07:00'}</span>
          </div>
          <div>
            <span>ISP</span>
            <span>{isp}</span>
          </div>
        </section>
      </main>

      <Map position={position} />

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Rubén</a>.
      </div>
    </>
  )
}

export default App
