import React, { Component } from 'react';

class Cast extends Component {
    render() {
        const personData = this.props.personData;
      return (
        <div>
       <p>name :{personData.name} </p>
       <p>role :{personData.role} </p>
       </div>

      );
    }
  }
  export default Cast;
  