import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={value => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log('featured')}>
          Event Starts in
        </ListItem>

        <ListItem button onClick={() => console.log('venuenfo')}>
          Venue NFO
        </ListItem>

        <ListItem button onClick={() => console.log('highlights')}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => console.log('pricing')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => console.log('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
