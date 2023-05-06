
import './App.css';
import AppHeader from "./components/AppHeader";
import Footer from './components/Footer';
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const BookingLayout = ({ children }) => {
  return (
    <>
      <AppHeader/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Route
          path="/"
          render={() => (
            <div
              dangerouslySetInnerHTML={{ __html: Home() }}
            />
          )}
        />
    <Switch>
      <Route
        path="/booking"
        render={() => (
          <BookingLayout>
            <Switch>
           

            </Switch>
          </BookingLayout>
        )}
      />
    </Switch>
    </Router>
  );
}

export default App;
