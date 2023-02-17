import * as React from "react";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";;
import BarChartIcon from '@mui/icons-material/BarChart';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionActions from "@mui/material/AccordionActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
import StoreIcon from '@mui/icons-material/Store';
import DescriptionIcon from '@mui/icons-material/Description';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ErrorIcon from '@mui/icons-material/Error';
import Checkbox from '@mui/material/Checkbox'

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  height: '40px',
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function TopBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const graficos = [
    {
      text: "Material Risk Value",
      icon: <Checkbox defaultChecked/>,
      path: "/",
    },
    {
      text: "Material Scrap Areas",
      icon: <Checkbox defaultChecked/>,
      path: "/",
    },
    {
      text: "Evolution Week",
      icon: <Checkbox defaultChecked/>,
      path: "/",
    },
    {
      text: "Evolution Model",
      icon: <Checkbox defaultChecked/>,
      path: "/",
    },
    {
      text: "Material Classification",
      icon: <Checkbox />,
      path: "/",
    },    
    {
      text: "Material Scrap Defect",
      icon: <Checkbox />,
      path: "/"
    },
    {
      text: "Material Scrap Shift",
      icon: <Checkbox />,
      path: "/"
    },
  ];

  // const visualizar = [
  //   {
  //     text: "Companhias",
  //     icon: <StoreIcon />,
  //     path: "/viewCia",
  //   },
  //   {
  //     text: "Reason Codes",
  //     icon: <DescriptionIcon />,
  //     path: "/viewReason",
  //   },
  //   {
  //     text: "Prefixos",
  //     icon: <ConfirmationNumberIcon />,
  //     path: "/viewPrefixo",
  //   },
  //   {
  //     text: "Tipos de Embalagem",
  //     icon: <LocalMallIcon />,
  //     path: "/viewEmbalagem",
  //   },
  //   {
  //     text: "Lista Itens/Embalagem",
  //     icon: <SummarizeIcon />,
  //     path: "/viewLista",
  //   },
  //   {
  //     text: "Excessões",
  //     icon: <ErrorIcon />,
  //     path: "/viewExcessao",
  //   },
  // ]

  return (
    <Box style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="sticky" open={open} style={{ backgroundColor: '#005a81', color:'#fff', height: '65px'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            style={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{marginLeft: '15px'}}>
            PORTAL TML
          </Typography>
          <Box style={{ position: 'relative', display:'flex', justifyContent: 'end', alignItems: 'end', left: '80%'}}>
          <Button style={{ color: '#fff'}} startIcon={<LogoutIcon />} onClick={(e) => router.push('/')}>
          Logout
          </Button>          
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            GRÁFICOS
          </AccordionSummary>
          <AccordionActions>
            <List>
              {graficos.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={(e) => router.push(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </AccordionActions>
        </Accordion>
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            VISUALIZAR
          </AccordionSummary>
          <AccordionActions>
            <List>
              {visualizar.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={(e) => router.push(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </AccordionActions>
        </Accordion> */}

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
