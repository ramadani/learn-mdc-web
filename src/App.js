import React, { Component } from 'react';
import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarSection,
  ToolbarMenuIcon
} from 'rmwc/Toolbar';
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import { Button } from 'rmwc/Button';

class App extends Component {
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
      <div>
        <Toolbar waterfall>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarMenuIcon use="menu" />
              <ToolbarTitle>Carenusa</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <Grid>
          <GridCell phone="12">
            <Typography use="headline" tag="div">Hello, {this.state.name}</Typography>
            <Button raised onClick={() => this.handlePressMe()}>Press Me</Button>
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default App;