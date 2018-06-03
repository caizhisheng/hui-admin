import * as React from 'react';
import './App.css';
import logo from './logo.svg';
// import HRButton from 'hr-button';
// import HRButton from '';
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
        {/* <HRButton size="large" text="保存1" />
        <HRButton type="dashed" size="large" text="保存2" icon="search" /> */}
      </div>
    );
  }
}

export default App;
