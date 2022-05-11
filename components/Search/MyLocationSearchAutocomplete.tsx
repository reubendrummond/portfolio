import React, { useEffect, useState, createRef } from "react";
import { SearchIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import Script from "next/script";

// to declare global function - thx Google
declare global {
  interface Window {
    initAutocomplete: () => void;
  }
}

export const MyLocationSearchAutocomplete = () => {
  const [value, setValue] = useState("");
  const inputRef = createRef<HTMLInputElement>();
  const [autocompleteService, setAutocompleteService] =
    useState<google.maps.places.AutocompleteService>();
  const [predictions, setPredictions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [place, setPlace] =
    useState<google.maps.places.AutocompletePrediction | null>(null);

  // Implementation with non-custom styling:

  //   const [autocomplete, setAutocomplete] =
  //     useState<google.maps.places.Autocomplete>();

  //   useEffect(() => {
  //     const initAutocomplete = () => {
  //       if (!inputRef.current) return;
  //       const options: google.maps.places.AutocompleteOptions = {
  //         componentRestrictions: {
  //           country: "au",
  //         },
  //         strictBounds: false,
  //         fields: ["formatted_address"],
  //       };
  //       const autocomplete = new google.maps.places.Autocomplete(
  //         inputRef.current,
  //         options
  //       );
  //       setAutocomplete(autocomplete);
  //     };

  //     window.initAutocomplete = initAutocomplete;
  //   }, [inputRef]);

  //   // place selected => update value
  //   useEffect(() => {
  //     if (!autocomplete) return;
  //     const onPlaceSelect = google.maps.event.addListener(
  //       autocomplete,
  //       "place_changed",
  //       () => {
  //         const place = autocomplete.getPlace();
  //         if (place.formatted_address) setValue(place.formatted_address);
  //       }
  //     );

  //     return () => google.maps.event.removeListener(onPlaceSelect);
  //   }, [autocomplete]);

  // initialise the Google autocomplete
  // must wait until DOM element rendered
  // declares global function for Gogole API callback
  useEffect(() => {
    const initAutocompleteService = () => {
      const autocompleteService = new google.maps.places.AutocompleteService();
      setAutocompleteService(autocompleteService);
    };

    window.initAutocomplete = initAutocompleteService;
  }, []);

  // handling autocompletes
  useEffect(() => {
    // bit ugly but ah well
    if (value === "" || value === place?.description) {
      setPredictions([]);
      if (value === "") setPlace(null);
      return;
    }
    setPlace(null);

    autocompleteService?.getPlacePredictions(
      {
        input: value,
        componentRestrictions: {
          country: "au",
        },
      },
      (predictions, status) => {
        setPredictions(predictions ?? []);
      }
    );
  }, [value, autocompleteService]); // place cannot be a dependency here

  useEffect(() => {
    if (place) setValue(place.description);
  }, [place]);

  return (
    <>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0DLDPQ-RY4fshpRM8gLD_j0b1k2wKw3Y&libraries=places&callback=initAutocomplete" />
      <div className="flex flex-col">
        <div
          className="flex flex-row gap-x-4 py-2 px-3 bg-white rounded-md"
          style={
            predictions.length
              ? {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }
              : {}
          }
        >
          <SearchIcon className="h-[24px] stroke-black" />
          <input
            // ref={inputRef}
            type="text"
            className="w-full outline-none"
            placeholder="Search address here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col rounded-b-md bg-white">
          {predictions.map((place) => {
            const { description, place_id } = place;
            return (
              <button
                onClick={() => setPlace(place)}
                key={place_id}
                className="flex flex-row px-3 py-2 bg-white items-center hover:bg-neutral-100 rounded-md"
              >
                <LocationMarkerIcon className="h-[18px] m-1" />
                <p className="overflow-ellipsis text-left whitespace-nowrap max-w-full overflow-hidden">
                  {description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
