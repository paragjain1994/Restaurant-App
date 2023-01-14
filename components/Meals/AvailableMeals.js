import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from 'axios';
import React , {useState,useEffect} from "react";

let DUMMY_MEALS = [
  // {
  //   id: "m1",
  //   name: "Sushi",
  //   description: "Finest fish and veggies",
  //   price: 22.99,
  // },
  // {
  //   id: "m2",
  //   name: "Schnitzel",
  //   description: "A german specialty!",
  //   price: 16.5,
  // },
  // {
  //   id: "m3",
  //   name: "Barbecue Burger",
  //   description: "American, raw, meaty",
  //   price: 12.99,
  // },
  // {
  //   id: "m4",
  //   name: "Green Bowl",
  //   description: "Healthy...and green...",
  //   price: 18.99,
  // },
];

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState(DUMMY_MEALS);

  useEffect(()=>{
    axios
    .get("https://crudcrud.com/api/7b8388ca82814dd0be9fc0aefbeef288/ReactMeal")
    .then((res)=>{
      console.log(res.data);
      setMeals(res.data);
    })
    .catch(err => console.error(err));
  },[]);

  console.log(DUMMY_MEALS);
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ))

  return (
    <section className={classes.meals}>
      <Card>
        {" "}
        <ul>{mealsList}</ul>{" "}
      </Card>
    </section>
  );
};

export default AvailableMeals;
