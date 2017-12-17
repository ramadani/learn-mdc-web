import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World'
    }
  }

  handlePressMe() {
    this.setState({ name: 'Universe' });
  }

  render () {
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell">
            <h1 className="mdc-typography--display1">Hello, {this.state.name}</h1>
            <button type="button" className="mdc-button mdc-button--raised"
              onClick={() => this.handlePressMe()}>
              Press Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;