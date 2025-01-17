import { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import MyList from './MyList';
import MyMealAndIngredients from './MyMealAndIngredients';

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);

  const [selectedDay, setSelectedDay] = useState(false);


  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = () => {
    const newMeal = {
      title: "Heute ist...",
      id: uuidv4(),
      mealForADay: "",
      ingredients: "",
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(setMealPlans)
  }

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }

  const updateDay = (myUpdateMeal) => {
    const updateMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdateMeal.id) {
        return myUpdateMeal;
      }
      return mealPlan;
    })
    setMealPlans(updateMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }
  
  
  return (
    <div className="App">
     
     <div className="meal-container">
      <MyList 
      mealPlans={mealPlans} 
      addMeal={addMeal} 
      deleteDay={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}/>

      <MyMealAndIngredients selectedDay={getActiveMeal()} updateDay={updateDay}/>

    </div>
    </div>
  );
}

export default App;
