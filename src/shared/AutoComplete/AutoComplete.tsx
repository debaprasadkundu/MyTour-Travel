import React, { useEffect } from "react";
import result from "../../mock/city.json";
import "./autocomplete.scss";

const SuggestionsList = (props: any) => {
  const {
    suggestions,
    inputValue,
    onSelectSuggestion,
    displaySuggestions,
    selectedSuggestion,
  } = props;

  if (inputValue && displaySuggestions) {
    if (suggestions.length > 0) {
      return (
        <ul className="suggestions-list">
          {suggestions.map((suggestion: any, index: number) => {
            const isSelected = selectedSuggestion === index;
            const classname = `suggestion ${isSelected ? "selected" : ""}`;
            return (
              <li
                key={index}
                className={classname}
                onClick={() => onSelectSuggestion(index)}
              >
                {suggestion.city_name}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div>No suggestions available...</div>;
    }
  }
  return <></>;
};

const Autocomplete = (props: any) => {
  const { placeholder, id, selectedValue, onValueSelect, label, selectedCity } =
    props;
  const [inputValue, setInputValue] = React.useState("");
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<any>([]);
  const [selectedSuggestion, setSelectedSuggestion] = React.useState(0);
  const [displaySuggestions, setDisplaySuggestions] = React.useState(false);
  const suggestions = result.City;

  useEffect(() => {
    setInputValue(selectedValue);
  }, [selectedValue]);

  const onChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);

    if (!value?.length && selectedValue?.length) {
      onValueSelect({ target: { id: id, value: "" } });
    }

    const filteredSuggestions = suggestions
      .filter((item) => item.city_code !== selectedCity)
      ?.filter(
        (suggestion) =>
          suggestion.city_name.toLowerCase().includes(value.toLowerCase()) ||
          suggestion.city_code.toLowerCase().includes(value.toLowerCase())
      );

    setFilteredSuggestions(filteredSuggestions);
    setDisplaySuggestions(true);
  };

  const onSelectSuggestion = (index: number) => {
    setSelectedSuggestion(index);
    const filteredValue = filteredSuggestions[index];
    setInputValue(filteredValue?.city_name);
    setFilteredSuggestions([]);
    setDisplaySuggestions(false);
    onValueSelect({ target: { id: id, value: filteredValue?.city_code } });
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        id={label}
        onChange={onChange}
        value={inputValue}
      />
      <label htmlFor={label}>{label}</label>
      <SuggestionsList
        inputValue={inputValue}
        selectedSuggestion={selectedSuggestion}
        onSelectSuggestion={onSelectSuggestion}
        displaySuggestions={displaySuggestions}
        suggestions={filteredSuggestions}
      />
    </>
  );
};

export default Autocomplete;
