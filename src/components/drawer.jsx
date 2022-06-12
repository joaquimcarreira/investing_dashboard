import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import TimelineIcon from '@mui/icons-material/Timeline';
import PieChartIcon from '@mui/icons-material/PieChart';
import TableViewIcon from '@mui/icons-material/TableView';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import { withRouter, useHistory } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: theme.palette.primary.main,

  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const PersistentDrawerLeft = ({ props }) => {
  const theme = useTheme();
  const { open, setOpen } = props
  const history = useHistory()
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const closeDrawer = () => {
    if (window.innerWidth < 1081) {
      setOpen(false)
    }

  }

  const itemToList = [
    {
      text: "Cash Flow", icon: <LocalAtmIcon ></LocalAtmIcon>, onClick: () => {
        closeDrawer()
        history.push("/cash")
      }
    },
    {
      text: "Financial Performance", icon: <TimelineIcon></TimelineIcon>, onClick: () => {
        history.push("/finPerformance")
        closeDrawer()
      }
    },
    {
      text: "Profit and loss", icon: <ThumbsUpDownIcon></ThumbsUpDownIcon>, onClick: () => {
        history.push("/profitLoss")
        closeDrawer()
      }
    },
    {
      text: "KPI", icon: <TableViewIcon></TableViewIcon>, onClick: () => {
        history.push("/kpi")
        closeDrawer()
      }
    },

  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        open={open}
      >

        <Divider />
        <List>
          {itemToList.map((item) => {
            const { text, icon, onClick } = item
            return (
              <ListItem button key={text} onClick={onClick} >
                <ListItemIcon >
                  {icon && icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          }
          )}
        </List>
      </Drawer>
    </Box>
  );
}
export default withRouter(PersistentDrawerLeft)
