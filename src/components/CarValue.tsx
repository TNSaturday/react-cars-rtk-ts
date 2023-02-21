import { useAppSelector } from "../hooks";

function CarValue() {
  const totalCost = useAppSelector(({ cars: { cars, searchTerm } }) =>
    cars
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((prev, cur) => prev + cur.cost, 0)
  );

  return <div className="car-value">Total Cost ${totalCost}</div>;
}

export default CarValue;
