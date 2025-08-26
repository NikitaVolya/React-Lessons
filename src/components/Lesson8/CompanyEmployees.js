import "./CompanyEmployees.css";


export default function CompanyEmployees({ company, employees }) {
    return (
        <div className="company-container">
        <h2>{company.name}</h2>
        <p>Industry: {company.industry}</p>
        <p>Location: {company.location}</p>
        <p>Total employees: {employees.length}</p>

        <h3>Our Team</h3>
        <ul className="employee-list">
            {employees.map((emp, index) => (
            <li key={index} className="employee-card">
                <h4>{emp.name}</h4>
                <p>Position: {emp.position}</p>
                <p>Email: {emp.email}</p>
            </li>
            ))}
        </ul>
        </div>
    );
}
