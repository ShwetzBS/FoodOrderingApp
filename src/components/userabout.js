export const userCompoenent = (props) => {
  /** or ({name,contact,location}) */
  return (
    <div className="userCard">
      <h1>Name of user :{props.name}</h1> /** {name} */
      <h1>Location : {props.location}</h1>
      <h3>Contact :{props.contact}</h3>
    </div>
  );
};
