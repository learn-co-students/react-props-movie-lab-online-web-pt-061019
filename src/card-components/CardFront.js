import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    {/*console.log(this.props)*/}
    const poster = this.props.poster
    return (
      <div className="card-front" style={{backgroundImage: `url(${poster})`}}>
      </div>
    )
  }
}
