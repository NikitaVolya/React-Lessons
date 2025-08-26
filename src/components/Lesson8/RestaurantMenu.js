import "./RestaurantMenu.css";


export default function RestaurantMenu({ menu }) {
    return (
        <div className="menu-container">
        <h2>Restaurant Menu</h2>
        {menu.map((section, idx) => (
            <div key={idx} className="menu-section">
            <h3>{section.category}</h3>
            <ul>
                {section.dishes.map((dish, i) => (
                <li key={i} className="dish-card">
                    <h4>{dish.name}</h4>
                    <p>Ingredients: {dish.ingredients.join(", ")}</p>
                    <p>Price: ${dish.price}</p>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    );
}
