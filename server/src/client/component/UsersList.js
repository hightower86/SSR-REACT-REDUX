import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Here's a big list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);

// cnst UsersList = ({ uList, fetch_users }) => {
//   console.log(uList);
//   //const [usersList, setUsersList] = useState([]);
//   // useEffect(() => {
//   //   const uList = fetchUsers();
//   //   setUsersList([...uList]);
//   // }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(uList, 0, 2)}</pre>
//       <button onClick={() => fetch_users}>Fetch</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     uList: state.users,
//   };
// };

// expoort default connect(mapStateToProps, { fetch_users })(UsersList);
