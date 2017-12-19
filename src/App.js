import React, { Component } from 'react';
import {
  Toolbar,
  ToolbarFixedAdjust,
  ToolbarRow,
  ToolbarTitle,
  ToolbarSection,
  ToolbarMenuIcon
} from 'rmwc/Toolbar';
import { Grid } from 'rmwc/Grid';
// eslint-disable-next-line
import { Typography } from 'rmwc/Typography';
// eslint-disable-next-line
import { Button } from 'rmwc/Button';
import CardCell from './CardCell';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Nyunmor'
    }
  }

  render () {
    const cards = [...Array(10).keys()].map(number =>
      <CardCell key={number} />
    );

    return (
      <div>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarMenuIcon use="menu" />
              <ToolbarTitle>{this.state.title}</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarFixedAdjust />
        <Grid>{cards}</Grid>
      </div>
    );
  }
}

export default App;