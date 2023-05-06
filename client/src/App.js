import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from "./pages/Booking";

const BookingLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route
          path="/booking"
          render={() => (
            <BookingLayout>
              <Switch>
                <Route  path="/" component={Booking} />
              </Switch>
            </BookingLayout>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
