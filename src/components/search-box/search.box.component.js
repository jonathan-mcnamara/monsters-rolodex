import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        // value={search}
        onChange={handleChange}
      />
    </div>
  );
};
