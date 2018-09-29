import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  avatar: {
    marginRight: 10,
    marginTop: 3
  }
};

function LetterAvatar(props) {
  const { classes, name } = props;
  return (
    <Avatar className={classes.avatar}>
      {name
        .split(" ")
        .map((n, i, a) => (i === 0 || i + 1 === a.length ? n[0] : null))
        .join("")
        .toUpperCase()}
    </Avatar>
  );
}

LetterAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(LetterAvatar);
