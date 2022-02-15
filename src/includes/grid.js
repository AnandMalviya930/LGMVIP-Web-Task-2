import React from "react";
const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
      <img
        src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
        alt="loading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="container" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <p>User id: {user.id}</p>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">{user.email}</p>
          </div>
      ))}
    </div>
  );
};
export default Users;