import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id="gif.id" key={gif.id} onClick={this.handleClick} />);
  }

  handleClick = () => {
    this.props.selectedGifId(event.target.id.value);
  }

  render() {
    return (
      <div className="git-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
