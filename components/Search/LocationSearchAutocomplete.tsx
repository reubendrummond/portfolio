import React, { useEffect, useState, createRef } from "react";
import { SearchIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import Script from "next/script";
import { Combobox, Transition } from "@headlessui/react";

// to declare global function - thx Google
declare global {
  interface Window {
    initAutocomplete: () => void;
  }
}

export const LocationSearchAutocomplete = () => {
  const [query, setQuery] = useState("");
  const inputRef = createRef<HTMLInputElement>();
  const [autocompleteService, setAutocompleteService] =
    useState<google.maps.places.AutocompleteService>();
  const [predictions, setPredictions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [place, setPlace] =
    useState<google.maps.places.AutocompletePrediction | null>(null);

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
    if (query === "") setPredictions([]);

    autocompleteService?.getPlacePredictions(
      {
        input: query,
        componentRestrictions: {
          country: "au",
        },
      },
      (preds, status) => {
        setPredictions(preds ?? []);
      }
    );
  }, [query, autocompleteService]); // place cannot be a dependency here

  useEffect(() => {
    //   if (place) setValue(place.description);
    console.log("place: " + place?.description);
  }, [place]);

  return (
    <>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0DLDPQ-RY4fshpRM8gLD_j0b1k2wKw3Y&libraries=places&callback=initAutocomplete" />
      <div className="w-[300px] relative">
        <Combobox value={place} onChange={setPlace}>
          {({ open }) => (
            <>
              <div
                // className="flex flex-row gap-x-4 py-2 px-3 bg-white rounded-md overflow-none">
                className={`flex flex-row gap-x-4 py-2 px-3 bg-white rounded-md overflow-none ${
                  open && predictions.length && "rounded-b-none"
                }`}
              >
                <SearchIcon className="h-[24px] stroke-black" />
                <Combobox.Input
                  onChange={(e) => setQuery(e.target.value)}
                  displayValue={(
                    place: google.maps.places.AutocompletePrediction
                  ) => (place ? place.description : "")}
                  className="w-full outline-none rounded-b-none"
                />
              </div>
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => {
                  setQuery("");
                  setPredictions([]);
                }}
              >
                <Combobox.Options
                  // className="absolute mt-2 w-full bg-white rounded-md"
                  className={`absolute w-full bg-white rounded-b-md`}
                >
                  {predictions.map((place) => {
                    const { description, place_id } = place;

                    return (
                      <Combobox.Option
                        key={place_id}
                        value={place}
                        className="hover:cursor-pointer hover:bg-neutral-100 focus:bg-neutral-100 rounded-md"
                      >
                        {({ selected, active }) => (
                          <div
                            className={`flex flex-row bg-white px-3 py-2 select-none rounded-md  ${
                              active && "bg-neutral-100"
                            }`}
                          >
                            <LocationMarkerIcon className="h-[18px] m-1" />
                            <p
                              className="overflow-ellipsis overflow-hidden whitespace-nowrap 
                            w-full"
                            >
                              {description}
                            </p>
                          </div>
                        )}
                      </Combobox.Option>
                    );
                  })}
                </Combobox.Options>
              </Transition>
            </>
          )}
        </Combobox>
      </div>
    </>
  );
};
