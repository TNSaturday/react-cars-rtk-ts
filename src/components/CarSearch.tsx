import { useAppDispatch, useAppSelector } from "../hooks";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const { searchTerm } = useAppSelector((state) => state.cars);
  const dispatch = useAppDispatch();
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label htmlFor="searchInput" className="label">
          Search
        </label>
        <input
          id="searchInput"
          className="input"
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
