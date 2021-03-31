import React from 'react';
import usePlacesAutoComplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";


const Search = ({ places, isLoaded }) => {

  const libraries = places;

  /* default location is Atlanta */
  const getLat = () => 33.7490;
  const getLng = () => -84.3880;
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions, } = usePlacesAutoComplete({
    requestOptions: {
      location: {
        lat: getLat,
        lng: getLng
      },
      radius: 500000
    }
  })


  const mapRef = React.useRef();
  const zoomIn = ({ lat, lng }) => {
    mapRef.current.zoomIn({ lat, lng });
    mapRef.current.setZoom()
  }

  const handleChange =(event) => setValue(event.target.value);

  const handleSelect = ({ description }) => {
    //console.log(address)
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description })
    .then((results) => getLatLng(results[0]))
    .then(({ lat, lng }) => {
      console.log(" coordinates: ", { lat, lng })
    })
    .catch((error) => {
      console.log("error:", error);
    })

  }

  const renderSuggestions = () =>
    data.map(({ place_id, description }) => {
      return (
        <ComboboxOption key={place_id} value={description} />
      );
    });

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput value={value} placeholder="Where's the bathroom" onChange={handleChange} disabled={!ready} />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" && renderSuggestions()}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

export default Search;