import { ChangeEvent, FormEvent, useState } from 'react'

import * as serviceAddress from '../../service/LocationService'
import { AddressProps } from '../../@types/address'

interface IAddress {
  setObjectAddress: React.Dispatch<React.SetStateAction<AddressProps>>
}

export default function Form({ setObjectAddress }: IAddress) {
  const [address, setAddress] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await serviceAddress.getAddress(address)

    if (res) {
      setObjectAddress(res)

      setAddress('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="address"
        onChange={handleInput}
        value={address}
        placeholder="Search for any IP address or domain"
        required
      />
      <button>
        <img src="/images/icon-arrow.svg" alt="" />
      </button>
    </form>
  )
}
