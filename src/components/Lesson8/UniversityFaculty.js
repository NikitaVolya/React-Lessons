import "./UniversityFaculty.css";


export default function UniversityFaculty({ faculty }) {
  return (
    <div className="faculty-container">
      <h2>Faculty of {faculty.name}</h2>
      <p>Dean: {faculty.dean}</p>
      <h3>Groups</h3>
      {faculty.groups.map((group, idx) => (
        <div key={idx} className="group-card">
          <h4>Group: {group.name}</h4>
          <ul>
            {group.students.map((student, i) => (
              <li key={i}>{student}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
