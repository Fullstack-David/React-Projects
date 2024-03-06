// Destructring method
import PropTypes from "prop-types";


const Student = ({ name, age, isStudent }) => {
  return (
    <div className="student">
      <h1>Name: {name}</h1>
      <h3>Age: {age}</h3>
      <h4>Student: {isStudent  ? "Yes" : "No"}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ab odit ullam atque nam sapiente sunt nulla adipisci, quis unde excepturi. Numquam perferendis est reiciendis sapiente obcaecati fugiat veniam commodi?</p>
      
    </div>
  );
}
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false
}


Student.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  isStudent:PropTypes.bool,
}

export default Student;