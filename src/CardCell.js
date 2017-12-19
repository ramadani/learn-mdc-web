import React, { Component } from 'react';
import { GridCell } from 'rmwc/Grid';
import {
  Card,
  CardPrimary,
  CardTitle,
  CardSubtitle,
  CardActions,
  CardAction
} from 'rmwc/Card';

class CardCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World',
      isPressed: false,
    }
  }

  handlePressMe() {
    const isPressed = !this.state.isPressed;
    const name = isPressed ? 'Universe' : 'World';

    this.setState({ name, isPressed });
  }

  render () {
    return (
      <GridCell span="12">
        <Card>
          <CardPrimary>
            <CardTitle>Hello, {this.state.name}</CardTitle>
            <CardSubtitle>
              Get a ReactDOM reference to the root child of the component.
            </CardSubtitle>
          </CardPrimary>
          <CardActions>
            <CardAction onClick={() => this.handlePressMe()}>
              Press Me
            </CardAction>
          </CardActions>
        </Card>
      </GridCell>
    );
  }
}

export default CardCell;