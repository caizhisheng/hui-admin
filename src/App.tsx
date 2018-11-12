import * as React from 'react';
// antd组件库样式
import '../node_modules/antd/dist/antd.min.css'
import { IrsButton } from '../index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <IrsButton size="large" text="保存1"/>
        <IrsButton type="dashed" size="large" text="保存2" icon="search" />
      </div>
    );
  }
}

export default App;
 