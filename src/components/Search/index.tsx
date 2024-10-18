import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      router.push(`?s=${encodeURIComponent(searchTerm.toLowerCase())}`);
    } else {
      router.push(window.location.pathname);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
      event.preventDefault();
    }
  };

  return (
    <div className="w-2/6 flex items-center justify-center">
      <input
        type="search"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="bg-[#ccccccc2] flex-1 h-auto py-[8px] px-6 text-lg font-semibold"
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
        className="bg-primaryColor block text-white px-9 py-2 w-auto font-semibold text-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Index;

// TODO: OLD WAY TO ADD QUERY
// const handleSearch = () => {
//   const query = new URLSearchParams(window.location.search);
//   query.set('s', searchTerm);
//   window.history.pushState({}, '', `?${query.toString()}`);
//   console.log('query :>> ', query);
// }
