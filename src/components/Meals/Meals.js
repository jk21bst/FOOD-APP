import MealSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";


const Meals = () => {
  return (
    <Fragment>
      <AvailableMeals />
      <MealSummary />
    </Fragment>
  );
};
export default Meals;
