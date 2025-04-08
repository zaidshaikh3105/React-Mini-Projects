import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  Tooltip,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import TableChartIcon from "@mui/icons-material/TableChart";
import CakeIcon from "@mui/icons-material/Cake";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";

// Navigation links
const navigationLinks = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
    description: "Dashboard",
  },
  {
    name: "Form",
    path: "/form",
    icon: <CodeIcon />,
    description: "Simple Form",
  },
  {
    name: "Todo",
    path: "/todo",
    icon: <FormatListBulletedIcon />,
    description: "Task Manager",
  },
  {
    name: "Weather",
    path: "/weather",
    icon: <WbSunnyIcon />,
    description: "Weather Forecast",
  },
  {
    name: "Search",
    path: "/search",
    icon: <SearchIcon />,
    description: "Search Application",
  },
  {
    name: "Birthday",
    path: "/birthday", // ✅ Corrected path
    icon: <CakeIcon />,
    description: "Birthday Tracker",
  },
  {
    name: "Data Table",
    path: "/datatable",
    icon: <TableChartIcon />,
    description: "Data Management",
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    tap: { scale: 0.95 },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: theme.palette.primary.main,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const isActive = (path) => {
    if (path === "/" && location.pathname !== "/") {
      return false;
    }
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const renderDrawerContent = () => (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          py: 3,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
        >
          React Mini Projects
        </Typography>
      </Box>

      <Divider />

      <List>
        {navigationLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={link.path}
              selected={isActive(link.path)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: `${theme.palette.primary.light}20`,
                },
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.light}10`,
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive(link.path)
                    ? theme.palette.primary.main
                    : "inherit",
                  minWidth: "40px",
                }}
              >
                {link.icon}
              </ListItemIcon>
              <ListItemText
                primary={link.name}
                secondary={link.description}
                primaryTypographyProps={{
                  fontWeight: isActive(link.path) ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, p: 2 }}>
        <Tooltip title="View on GitHub">
          <IconButton
            component="a"
            href="https://github.com/your-username/react-mini-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="About this project">
          <IconButton component={RouterLink} to="/about">
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "background.paper",
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileTap="tap"
            >
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  mr: 2,
                }}
                startIcon={<CodeIcon />}
              >
                React Mini Projects
              </Button>
            </motion.div>

            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {navigationLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      component={RouterLink}
                      to={link.path}
                      color={isActive(link.path) ? "primary" : "inherit"}
                      sx={{
                        mx: 0.5,
                        fontWeight: isActive(link.path) ? "bold" : "normal",
                        borderBottom: isActive(link.path)
                          ? `2px solid ${theme.palette.primary.main}`
                          : "none",
                        borderRadius: 0,
                        position: "relative",
                        "&::after": isActive(link.path)
                          ? {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "100%",
                              height: "2px",
                              backgroundColor: theme.palette.primary.main,
                            }
                          : {},
                      }}
                    >
                      {link.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}

            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            bgcolor: "background.paper",
          },
        }}
      >
        {renderDrawerContent()}
      </Drawer>
    </>
  );
};

export default Navbar;
