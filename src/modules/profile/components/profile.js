import React from 'react';

class Profile extends React.Component {
  render() {

    return (
        <div className="limiter">
            <h2>{this.props.name}</h2>
            <h2>{this.props.email}</h2>
        </div>
    )
  }
};

export default Profile;