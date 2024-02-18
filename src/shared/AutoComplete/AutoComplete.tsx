import React from "react";

const suggestions = [
  "Oathbringer",
  "American Gods",
  "A Game of Thrones",
  "Prince of Thorns",
  "Assassin's Apprentice",
  "The Hero of Ages",
  "The Gunslinger",
];

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
                {suggestion}
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

const Autocomplete = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<any>([]);
  const [selectedSuggestion, setSelectedSuggestion] = React.useState(0);
  const [displaySuggestions, setDisplaySuggestions] = React.useState(false);

  const onChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filteredSuggestions);
    setDisplaySuggestions(true);
  };

  const onSelectSuggestion = (index: number) => {
    setSelectedSuggestion(index);
    setInputValue(filteredSuggestions[index]);
    setFilteredSuggestions([]);
    setDisplaySuggestions(false);
  };

  return (
    <>
      <input
        className="user-input"
        type="text"
        onChange={onChange}
        value={inputValue}
      />
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
