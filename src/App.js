import React, {Component} from 'react';
import Template from './component/template';
import Header from './component/header'
import List from './component/list'
class App extends Component {
  
  render () {
    return (
      <div>
        <Template
          header = {<Header/>}
          list = {<List/>}
        ></Template>
      </div>
    );
  }

}


export default App;
