import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
   return (
      <>
         <AuthProvider>
            <Router>
               <Navbar></Navbar>
               <Header></Header>
               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route path="/home">
                     <Home></Home>
                  </Route>
                  <Route path="/dashboard">
                     <Dashboard></Dashboard>
                  </Route>
                  <Route path="/login">
                     <Login></Login>
                  </Route>
                  <Route path="*">
                     <NotFound></NotFound>
                  </Route>
               </Switch>
            </Router>
         </AuthProvider>
      </>
   );
}

export default App;
