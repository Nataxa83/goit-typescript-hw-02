import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  
  const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userValue = (form.elements.namedItem("searchWord")as HTMLInputElement).value.trim();
    if (userValue === "") {
      toast.error("Please enter a valid search value!", {
        duration: 2000,
        position: "top-center",
        style: {marginTop: 60}
      });
      return;
    }  
    onSearch(userValue);              
    form.reset();
  };
  
  return (
    <>
      <header className={css.searchBar}>
        <Toaster />
        <form onSubmit={handleSubmit} className={css.inputForm} >
          <input
            className={css.input}
            type="text"
            name="searchWord"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.inputBtn}>
            <IoIosSearch className={css.icon} />
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
