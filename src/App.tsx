import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import HButton from 'h-button';
// antd组件库样式
import '../node_modules/antd/dist/antd.min.css'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HButton size="large" text="保存1" />
        <HButton type="dashed" size="large" text="保存2" icon="search" />
      </div>
    );
  }
}

export default App;
