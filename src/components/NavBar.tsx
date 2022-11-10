import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../images/Sack-the-Stigma.png";
import instagram from "../images/instagram-logo.png";
import { Menu } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { title: "About", to: "/about" },
  {
    title: "Shop",
    to: "https://www.sohoyouthclub.com/",
  },
  { title: "Get Involved", to: "/contact" },
];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img alt="sack the stigma logo" src={logo} style={{ height: 70 }} />
      <Divider />
      <List>
        <ListItem key={"home"} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} href={"/"}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.to}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              
            </IconButton> */}
            <Menu
              fontSize="large"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            />
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              {!isSmallScreen && (
                <a href={"/"}>
                  <img
                    alt="sack the stigma logo"
                    src={logo}
                    style={{ height: 70, marginRight: 16 }}
                  />
                </a>
              )}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    sx={{ color: "#fff" }}
                    href={item.to}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            </div>
            <div>
              <a
                href="http://Instagram.com/sackthestigma"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="instagram logo"
                  src={instagram}
                  style={{
                    height: 30,
                    marginTop: 15,
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </a>
            </div>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}
