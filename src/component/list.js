import React, {Component} from 'react';
import './list.css';
import Item from './item';

class List extends Component {

  constructor(props) {
    super(props);
    // listsnp
    this.state = {
      itemList: []
    }
    // temp maskInfo
    var tempMask = {
      img: '마스크 사진',
      price: '마스크 가격 | ',
      name: '마스크 이름 | '
    };
    this.handleItem(tempMask) // first step
  }

  handleItem (maskInfo) {
    // parameter is sent by backend
    /* 
      it is dictionary which contains
      maskInfo.price, maskInfo.img, maskInfo.name
    */
    var temp = [];
    temp = this.state.itemList.copyWithin(); 
    // ==== add item in this.state.itemList ===== 
    temp.push(                               //==
                                             //==                            */}
      (<div><Item maskInfo = {maskInfo}/><div className = 'separate'></div></div>)        //==           내 주석 잔기술이야*/}          
                                             //==
    );                                       //==
    this.setState({                          //==
      itemList: temp                         //==
    })                                       //==
    // ==========================================

  }
  
  render() {
    return (
      <div className = 'main-board'>
        {this.state.itemList}
        {this.state.itemList}
      </div>
    );
  }
}

export default List