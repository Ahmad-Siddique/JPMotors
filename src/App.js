import React, { useContext } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Sidebar from "./components/sideBar/sidebar";
import TopBar from "./components/appBar/topBar";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/Routes";
import { Box } from "@mui/material";
import AuthProvider, { AuthContext } from "./context/AuthContext";

const Layout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isAuthenticated && !isLoginPage ? "250px auto" : "auto",
        gridTemplateRows: isAuthenticated && !isLoginPage ? "60px auto 40px" : "auto",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {isAuthenticated && !isLoginPage && (
        <>
          <Box
            sx={{
              gridRow: "1 / span 3",
              gridColumn: "1 / 2",
              height: "100vh",
            }}
          >
            <Sidebar />
          </Box>
          <Box
            sx={{
              gridRow: "1 / 2",
              gridColumn: "2 / 3",
              
            }}
          >
            <TopBar />
          </Box>
        </>
      )}

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          gridRow: "2 / 3",
          gridColumn: isAuthenticated && !isLoginPage ? "2 / 3" : "1 / 3",
          bgcolor: isAuthenticated && !isLoginPage ? "#F5F6F8" : "white",
          height: isAuthenticated && !isLoginPage ? "calc(100vh - 100px)" : "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            p: isAuthenticated && !isLoginPage ? 3 : 0,
          }}
        >
          <AppRoutes />
        </Box>

        {isAuthenticated && !isLoginPage && (
            <Footer />
        )}
      </Box>
    </Box>
  );
};


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
};

export default App;
