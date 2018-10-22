import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const scrollToElement = elements => {
    scroller.scrollTo(elements, {
      duration: 1000,
      delay: 70,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={value => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement('featured')}>
          Event Starts in
        </ListItem>

        <ListItem button onClick={() => scrollToElement('venuenfo')}>
          Venue NFO
        </ListItem>

        <ListItem button onClick={() => scrollToElement('highlights')}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => scrollToElement('pricing')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => scrollToElement('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
