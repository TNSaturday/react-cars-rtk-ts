import { useAppDispatch, useAppSelector } from "../hooks";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useAppDispatch();
  const handleDeleteCar = (id: string) => dispatch(removeCar(id));
  const cars = useAppSelector(({ cars: { cars, searchTerm } }) =>
    cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const renderedCars = cars.map((car) => (
    <div key={car.id} className="panel">
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
  ));
  return <div className="car-list">{renderedCars}</div>;
}

export default CarList;
