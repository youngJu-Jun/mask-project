import React, {Component} from 'react';
import './template.css'

class Template extends Component {

  render () {
    return (
      <div>
        {/* header */}
        {this.props.header}
        <div>
          {/* lists */}
          {this.props.list}
        </div>
      </div>
    );
  }
}

export default Template;