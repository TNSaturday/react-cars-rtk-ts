import { useAppDispatch, useAppSelector } from "../hooks";
import { addCar, changeName, changeCost } from "../store";

function CarForm() {
  const dispatch = useAppDispatch();
  const { name, cost } = useAppSelector((state) => state.form);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCost = Number(event.target.value);
    dispatch(changeCost(newCost));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="carName" className="label">
              Name
            </label>
            <input
              id="carName"
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label htmlFor="carCost" className="label">
              Cost
            </label>
            <input
              id="carCost"
              type="number"
              className="input is-expanded"
              value={cost || ""}
              min={0}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
