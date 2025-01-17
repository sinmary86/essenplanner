const MyMealAndIngredients = ({selectedDay, updateDay}) => {

    const editMyMeal = (myInput, value) => {
        updateDay ({
            ...selectedDay,
            [myInput]: value
        })
    }

    if (!selectedDay) return <h6 className="highlighted-message">Planen Sie Ihre Woche im Voraus!</h6>

    return (<div className="meal-details">
       
            <input 
            className="myInput"
            type="text"
            placeholder="Heute ist..."
            id="title"
            value={selectedDay.title}
            onChange = {(e) => editMyMeal("title", e.target.value)}
            />

            <textarea 
            placeholder="Schreiben Sie hier Ihren Speiseplan"
            id="mealForADay"
            value={selectedDay.mealForADay}
            onChange = {(e) => editMyMeal("mealForADay", e.target.value)}
            />

            <textarea 
            placeholder="Liste der Inhaltsstoffe"
            id="mealForADay"
            value={selectedDay.ingredients}
            onChange = {(e) => editMyMeal("ingredients", e.target.value)}
            />

    </div>)
}

export default MyMealAndIngredients;
