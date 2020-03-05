import React, {Component} from 'react';
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      mean of standard 
      0 : sort by price
      1 : sort by popularity
      2 : standard price in drugstore
      */
      standard: 0,
      commentBox: ['가격순', '인기도순', '약국 표준가']
    };
    // 씨발 이거 빼놓지마라 좇됀다
    this.handleStandard = this.handleStandard.bind(this);
  }
  
  handleStandard () {
    // change sort standard
    if (this.state.standard === 2) {
      this.setState({standard:0});
    } else {
      this.setState({standard: this.state.standard + 1});
    }
  }

  render () {
    return (
      // page header
      <div className = 'header'>
        <span>
          {/* sub contents */}
          추가 콘텐츠, 후원계좌 xxxxx OO 등
        </span>
        <div className = 'header__standard-bar'>
          {this.state.commentBox[this.state.standard]}
          <div className = 'header__standard-bar__next-button' 
            onClick = {this.handleStandard}>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;