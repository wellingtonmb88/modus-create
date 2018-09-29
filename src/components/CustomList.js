import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@material-ui/core";

const styles = {
  list: { margin: "10px 50px 10px 50px" }
};
class CustomList extends Component {
  generateListItem = item => {
    const { onItemClick } = this.props;
    return (
      <div key={item.email}>
        <ListItem
          divider={true}
          onClick={() => onItemClick && onItemClick(item)}
        >
          <ListItemText primary={`${item.firstname} ${item.lastname}`} />
          <ListItemText primary={item.email} />
          <ListItemText primary={item.phone} />
        </ListItem>
      </div>
    );
  };

  render() {
    const { items } = this.props;
    return (
      <List component="nav" style={styles.list}>
        {items.map(this.generateListItem)}
      </List>
    );
  }
}

CustomList.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func
};

export default CustomList;
