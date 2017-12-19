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
import {
  TemporaryDrawer,
  TemporaryDrawerHeader,
  TemporaryDrawerContent
} from 'rmwc/Drawer';
import { ListItem, ListItemText } from 'rmwc/List';
import { Typography } from 'rmwc/Typography';

import CardCell from './CardCell';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Nyunmor',
      isDrawerOpen: false,
    }
  }

  render () {
    const cards = [...Array(10).keys()].map(number =>
      <CardCell key={number} />
    );

    const navItems = [...Array(7).keys()].map(number => {
      return (
        <ListItem ripple>
          <ListItemText>Menu Item {number}</ListItemText>
        </ListItem>
      )
    });

    return (
      <div>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarMenuIcon
                use="menu"
                onClick={() =>
                  this.setState({isDrawerOpen: true})
                }
              />
              <ToolbarTitle>{this.state.title}</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarFixedAdjust />

        <TemporaryDrawer
          open={this.state.isDrawerOpen}
          onClose={() => this.setState({isDrawerOpen: false})}
        >
          <TemporaryDrawerHeader style={{backgroundColor: '#f5f5f5'}}>
            <Typography use="subheading2" tag="div">
              {this.state.title}
            </Typography>
          </TemporaryDrawerHeader>
          <TemporaryDrawerContent>{navItems}</TemporaryDrawerContent>
        </TemporaryDrawer>

        <Grid>{cards}</Grid>
      </div>
    );
  }
}

export default App;