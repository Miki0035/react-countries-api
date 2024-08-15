import SearchBar from "./SearchBar";
import DropDownFilter from "./DropDownFilter";

const SearchBarFilterContainer = () => {
  return (
    <article className="flex flex-col items-start md:flex-row md:justify-between max-w-[1400px] md:py-10">
      <SearchBar />
      <DropDownFilter />
    </article>
  );
};

export default SearchBarFilterContainer;
