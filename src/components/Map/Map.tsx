import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useEffect, useState } from 'react'

interface IMap {
  position: {
    lat: number
    lng: number
  }
}

export default function Map({ position }: IMap) {
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    51.505, -0.09,
  ])

  const customIcon = new Icon({
    iconUrl: '/images/icon-location.svg',
  })

  const Markers = () => {
    const map = useMap()

    map.setView(selectedPosition, map.getZoom())

    return selectedPosition ? (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        icon={customIcon}
        interactive={false}
      ></Marker>
    ) : null
  }

  useEffect(() => {
    const { lat, lng } = position
    setSelectedPosition([lat, lng])
  }, [position])

  return (
    <MapContainer
      center={selectedPosition}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers />
    </MapContainer>
  )
}
