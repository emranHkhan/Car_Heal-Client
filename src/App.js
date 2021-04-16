import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MakeAdmin from "./Components/Admin/MakeAdmin";
import ManageService from "./Components/Admin/ManageService";
import OrdersAdmin from "./Components/Admin/OrdersAdmin";
import ServicesAdmin from "./Components/Admin/ServicesAdmin";
import Home from "./Components/Home/Home/Home";
import NavBar from "./Components/Home/Navbar/NavBar";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Book from "./Components/User/Book";
import BookingList from "./Components/User/BookingList";
import ClientReview from "./Components/User/ClientReview";
import EmptyBook from "./Components/User/EmptyBook";


export const UserContext = createContext();

function App() {

  const [loggedInUser, SetLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/book">
            <EmptyBook />
          </PrivateRoute>

          <PrivateRoute exact path="/admin">
            <OrdersAdmin />
          </PrivateRoute>

          <PrivateRoute path="/admin/orders">
            <OrdersAdmin />
          </PrivateRoute>

          <PrivateRoute path="/admin/addservice">
            <ServicesAdmin />
          </PrivateRoute>

          <PrivateRoute path="/admin/makeadmin">
            <MakeAdmin />
          </PrivateRoute>

          <PrivateRoute path="/admin/manageservice">
            <ManageService />
          </PrivateRoute>

          <PrivateRoute path="/user/book/:id">
            <Book />
          </PrivateRoute>

         

          <PrivateRoute path="/user/bookinglist">
            <BookingList />
          </PrivateRoute>

          <PrivateRoute path="/user/review">
            <ClientReview />
          </PrivateRoute>


        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
