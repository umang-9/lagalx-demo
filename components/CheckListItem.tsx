import React, { ReactElement } from 'react';
import { Box, Icon, Typography } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

interface CheckListItemProps {
  children: string;
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(2),
  },
  checkIcon: {
    color: '#4D69C2',
  },
}));

function CheckListItem(props: CheckListItemProps): ReactElement {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mr={2}
      >
        <Icon className={classes.checkIcon} role="presentation">
          <Check />
        </Icon>
      </Box>
      <Typography color="textPrimary">{props.children}</Typography>
    </li>
  );
}

export default CheckListItem;
