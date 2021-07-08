const StudentView = (props) => {
    const {student} = props;
    return (
      <div>      
        <h1>{student.name}</h1>
        <p>{student.description}</p>
        <ul>
        {student.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>{name}</li>
          );
        })}
        </ul>
      </div>
    );
  
  };
  
  export default StudentView;