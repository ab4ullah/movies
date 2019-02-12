import React, { Component } from 'react';
import Review from './review';
import Cast from './Cast';


class Movie extends Component {
    render() {
      const member = this.props.movie.cast;
      const members = member.map(person => {
        return <Cast personData={person} />;
      });
      return (
        <div>
      
       <h2>{this.props.movie.title}</h2>
       <img src={this.props.movie.poster}/>
       <div><strong>rating: {this.props.movie.rating}</strong></div>
  
       <p>description :{this.props.movie.description}</p>
       <p>director : {this.props.movie.director}</p>
       {/* <h1>
        {this.props.movie.cast.map(person => {
          return person;
        })}
      </h1> */}
       <div>{members}</div>
       <Review/>
       </div>

      

      );
    }
  }
  export default Movie;
  