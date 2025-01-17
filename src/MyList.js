import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MyList = ({ mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay }) => {
    return (
        <div className="meal-list">
            <h1>Wöchentliche Essensplan-Ideen</h1>
            <button className="btn-add" onClick={addMeal}>
                <FontAwesomeIcon icon={faPlus} className="btn-icon" /> Hinzufügen
            </button>
            <div>
                {mealPlans.map(({ id, title, mealForADay }) => (
                    <div
                        key={id}
                        className={`meal ${id === selectedDay ? "selected" : "default"}`}
                        onClick={() => setSelectedDay(id === selectedDay ? null : id)} // Снятие выделения при повторном нажатии
                    >
                        <p className="field">{title}</p>
                        <p className="field">{mealForADay.substring(0, 50)}</p>
                        <button className="btn-delete" onClick={(e) => {
                            e.stopPropagation(); // Остановка всплытия события, чтобы не срабатывал onClick родителя
                            deleteDay(id);
                        }}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyList;
