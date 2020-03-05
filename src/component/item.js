import React, {Component} from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        {this.props.maskInfo.name}
        {this.props.maskInfo.price}
        {this.props.maskInfo.img}
      </div>
    );
  }
}

export default Item;