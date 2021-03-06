import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "./components/NavBar";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/utils/NotFound'
import Home from "./components/Home";
import Footer from "./components/Footer";
import FirestoreCrud from "./components/FirestoreCrud";




const theme = createTheme({
  palette:{
    primary:{
      main:"#7e57c2"
    },
  },
  typography:{
    fontFamily:'Open Sans',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar/>
          <div style={{marginTop:"4rem"}}>
        <Routes>
          <Route path ='/' element={<Home/>}/>
            <Route path ='/login' element={<Login/>}/>
            <Route path ='/register' element={<Register/>}/>
            <Route path ='/crud' element={<FirestoreCrud/>}/>
            <Route path ='*' element={<NotFound/>}/>
        </Routes>
          </div>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
