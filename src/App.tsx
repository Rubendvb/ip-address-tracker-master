import { useState } from 'react'

import Form from './components/Form/Form'
import Header from './components/Header/Header'

import { AddressProps } from './@types/address'

import './App.css'

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

  return (
    <>
      <Header />

      <Form setObjectAddress={setObjectAddress} />

      <section>
        <div>
          <span>IP Address</span>
          <span>{objectAddress.ip}</span>
        </div>
        <div>
          <span>Location</span>
          <span>
            {objectAddress.location.region}, {objectAddress.location.country}{' '}
            {objectAddress.location.postalCode}
          </span>
        </div>
        <div>
          <span>Timezone</span>
          <span>UTC {objectAddress.location.timezone}</span>
        </div>
        <div>
          <span>ISP</span>
          <span>{objectAddress.isp || 'Not ISP'}</span>
        </div>
      </section>

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
