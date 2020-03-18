import React, {Component} from 'react';
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // don't remove this code
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
          White-Mask 하마
        </span>
      </div>
    );
  }
}

export default Header;