import React from 'react';
import usePlacesAutoComplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";


const Search = ({ places, zoomIn }) => {

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
      radius: 90 * 1000,
    }
  })


  const handleChange = (event) => setValue(event.target.value);

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    getGeocode({ address })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        zoomIn({ lat, lng })
        console.log(" coordinates: ", { lat, lng })
      })
      .catch((error) => {
        console.log("error:", error);
      })
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput value={value} placeholder="Where's the bathroom" onChange={handleChange} disabled={!ready} />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" && data.map(({ place_id, description }) =>
              <ComboboxOption key={place_id} value={description} />)
            }
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

export default Search;