import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  // useMapEvents,
} from 'react-leaflet'
import { Icon } from 'leaflet'
// import { useState } from 'react'

interface IMap {
  position: {
    lat: string
    lng: string
  }
}

export default function Map({ position }: IMap) {
  console.log(position)

  // const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
  //   51.505, -0.09,
  // ])

  // const Markers = () => {
  //   useMapEvents({
  //     click() {
  //       setSelectedPosition([Number(position.lat), Number(position.lng)])
  //     },
  //   })

  //   return selectedPosition ? (
  //     <Marker
  //       key={selectedPosition[0]}
  //       position={selectedPosition}
  //       interactive={false}
  //     ></Marker>
  //   ) : null
  // }

  const customIcon = new Icon({
    iconUrl: '/images/icon-location.svg',
  })

  return (
    <MapContainer center={[51.505, -0.08]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.08]} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
