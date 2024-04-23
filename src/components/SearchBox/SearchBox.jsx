import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxTitle}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.searchBoxInput}
      />
    </div>
  );
};

export default SearchBox;
