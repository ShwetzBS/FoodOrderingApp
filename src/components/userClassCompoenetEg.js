import React from "react";
class UserCompoenentClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    /** const {name} = this.props  */
    return (
      <div className="userCard">
        <h1>Name of user :{this.props.name}</h1> /** {name} */
        <h1>Location</h1>
        <h3>Contact</h3>
      </div>
    );
  }
}

export default UserCompoenentClass;
