import React, {Component} from 'react';
import Template from './component/template';
import Header from './component/header';
import List from './component/list';
import Banner from './component/banner';

class App extends Component {
  
  render () {
    return (
      <div>
        <Template
          header = {<Header/>}
          list = {<List/>}
        ></Template>
        <Banner></Banner>
      </div>
    );
  }

}


export default App;
