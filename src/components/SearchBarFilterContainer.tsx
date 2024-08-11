import SearchBar from "./SearchBar";
import DropDownFilter from "./DropDownFilter";

const SearchBarFilterContainer = () => {
  return (
    <article className="flex flex-col items-start md:flex-row md:justify-between max-w-[1400px]">
      <SearchBar />
      <DropDownFilter />
    </article>
  );
};

export default SearchBarFilterContainer;
