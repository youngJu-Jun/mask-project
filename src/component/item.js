import React, {Component} from 'react';

class Item extends Component {
  render() {
    return (
      <div className = 'main-board__item'>
        <span>
          {this.props.maskInfo.name}
          {this.props.maskInfo.price}
          {this.props.maskInfo.img}
        </span>
      </div>
    );
  }
}

export default Item;