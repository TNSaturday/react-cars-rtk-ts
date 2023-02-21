import { useAppDispatch, useAppSelector } from "../hooks";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useAppDispatch();
  const handleDeleteCar = (id: string) => dispatch(removeCar(id));
  const { cars, name } = useAppSelector(
    ({ form, cars: { cars, searchTerm } }) => {
      const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel${bold ? " bold" : ""}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleDeleteCar(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div className="car-list">{renderedCars}</div>;
}

export default CarList;
