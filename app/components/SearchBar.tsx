interface ISearchBar {
  query: string;
  onSearch: (_searchTerm: string) => void;
}

export default function SearchBar({ query, onSearch }: ISearchBar) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Type your question"
      className="text-xs rounded-lg border border-accentColor p-4 sm:text-base focus:outline-accentColor"
    />
  );
}
