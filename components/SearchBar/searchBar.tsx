import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import { HiSearch } from 'react-icons/hi';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';

export const SearchBar = () => {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        HiSearch,
      },
    });

    map.addControl(searchControl);

    return () => {
      map.removeControl(searchControl); // Wrapped in a block statement
    };
  }, []);

  return null;
};
