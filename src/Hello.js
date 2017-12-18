import React, { Component } from 'react';
import { Button } from 'rmwc/Button';

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
            <Button raised onClick={() => this.handlePressMe()}>
              Press Me
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;