import MultiplicationTable from "./MultiplicationTable";
import CompanyEmployees from "./CompanyEmployees";
import UniversityFaculty from "./UniversityFaculty";
import RestaurantMenu from "./RestaurantMenu";

function Lesson8() {
    return (
        <div>
        <MultiplicationTable size={5} />

        <CompanyEmployees
            company={{ name: "TechSoft", industry: "IT", location: "New York" }}
            employees={[
            { name: "Alice Johnson", position: "CEO", email: "alice@techsoft.com" },
            { name: "Bob Smith", position: "Developer", email: "bob@techsoft.com" },
            { name: "Clara White", position: "Designer", email: "clara@techsoft.com" },
            ]}
        />

        <UniversityFaculty
            faculty={{
            name: "Computer Science",
            dean: "Dr. Richard Brown",
            groups: [
                { name: "CS-101", students: ["John Doe", "Mary Lee", "Paul Adams"] },
                { name: "CS-102", students: ["Anna Green", "James White"] },
            ],
            }}
        />

        <RestaurantMenu
            menu={[
            {
                category: "Salads",
                dishes: [
                { name: "Greek Salad", ingredients: ["Tomato", "Cucumber", "Feta"], price: 8.5 },
                { name: "Caesar Salad", ingredients: ["Lettuce", "Chicken", "Parmesan"], price: 9.0 },
                ],
            },
            {
                category: "Soups",
                dishes: [
                { name: "Tomato Soup", ingredients: ["Tomato", "Cream", "Herbs"], price: 6.5 },
                { name: "Chicken Soup", ingredients: ["Chicken", "Carrot", "Noodles"], price: 7.5 },
                ],
            },
            ]}
        />
        </div>
    );
}

export default Lesson8;