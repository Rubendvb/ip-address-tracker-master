import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useEffect, useMemo } from 'react'

interface IMap {
  position: {
    lat: number
    lng: number
  }
}

export default function Map({ position }: IMap) {
  const customIcon = useMemo(
    () =>
      new Icon({
        iconUrl: '/images/icon-location.svg',
      }),
    []
  )

  const Markers = ({ position }: { position: [number, number] }) => {
    const map = useMap()

    useEffect(() => {
      map.setView(position, map.getZoom())
    }, [map, position])

    return (
      <Marker
        position={position}
        icon={customIcon}
        interactive={false}
      ></Marker>
    )
  }

  const positionArray: [number, number] = [position.lat, position.lng]

  return (
    <MapContainer
      center={positionArray}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers position={positionArray} />
    </MapContainer>
  )
}
