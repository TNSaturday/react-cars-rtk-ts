import { useAppDispatch, useAppSelector } from "../hooks";
import { changeName } from "../store";

function CarForm() {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => {
    return state.form.name;
  });
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">
        <form>
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
          </div>
        </form>
      </h4>
    </div>
  );
}

export default CarForm;
