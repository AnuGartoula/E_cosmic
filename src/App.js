import "./App.css";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { FaUserFriends, FaHeart, FaCartPlus } from "react-icons/fa";
import { Icon } from "@mui/material";
import SimpleSlider from "./common/slider";
import Catagory from "./common/category";
import "./common/category.css";
import "./common/slider.css";
import Concerns from "./common/concerns";
import Testimonials from "./common/testimonials";
import NavigationMenuDemo from "./common/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ProductDetails from "./common/product_detail";
import ConcernDetails from "./common/concern_details";
import SplashScreen from "./common/SplashScreen";

function App() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [showSplash, setShowSplash] = useState(false);

  // Function to handle the splash screen display
  const displaySplashScreen = (duration) => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, duration);
  };

  const fetchDataWithSplash = async (fetchFunction, duration = 3000) => {
    setShowSplash(true);
    try {
      await fetchFunction();
    } finally {
      setTimeout(() => setShowSplash(false), duration);
    }
  };

  // Fetch data for the main page
  useEffect(() => {
    fetchDataWithSplash(async () => {
      const response = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json?tags=popular"
      );
      const result = await response.json();
      const sortedData = result.sort((a, b) => b.rating - a.rating);
      const limitedData = sortedData.slice(0, limit);
      setData(limitedData);
    });
  }, []);

  return (
    <Router>
      {showSplash && <SplashScreen />}
      <PageTransition
        displaySplash={displaySplashScreen}
        fetchDataWithSplash={fetchDataWithSplash}
      >
        <div className="App">
          <nav className="navbar">
            <div className="navbar-upper">
              <h2>E C O S M I C</h2>
              <div className="search">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                  sx={{
                    backgroundColor: "lightgray",
                    borderRadius: "5px",
                  }}
                />
                <Icon>
                  <FaUserFriends />
                </Icon>
              </div>
              <ul className="nav-links">
                <li>
                  <a href="#">
                    {" "}
                    <FaCartPlus />{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaHeart />
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="items">
                    <NavigationMenuDemo />
                  </div>
                  <div className="Slider">
                    <SimpleSlider />
                  </div>
                  <div className="title">
                    <h3>Our Best Products</h3>
                  </div>
                  <div className="card-container">
                    {data.map((item, index) => (
                      <Link
                        to={`/product/${item.id}`}
                        key={index}
                        className="card-link"
                      >
                        <div className="card">
                          {item.image_link ? (
                            <img
                              src={item.image_link}
                              alt={item.name}
                              className="card-image"
                            />
                          ) : (
                            <div className="no-image">No Image Available</div>
                          )}
                          <div className="card-content">
                            <h2>{item.name}</h2>
                            <p>
                              <strong>Brand:</strong> {item.brand}
                            </p>
                            <br />
                            <p>
                              <strong>Price:</strong> {item.currency || "N/A"}{" "}
                              {item.price || "N/A"}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="Catagory">
                    <Catagory />
                  </div>

                  <div className="Concerns">
                    <Concerns />
                  </div>

                  <div className="Testimonials">
                    <Testimonials />
                  </div>
                </>
              }
            />
            <Route
              path="/product/:id"
              element={
                <PageWithFetch
                  fetchFunction={() =>
                    fetch(`https://example.com/product-details`)
                  }
                  duration={5000}
                >
                  <ProductDetails />
                </PageWithFetch>
              }
            />
            <Route
              path="/concerns/:id"
              element={
                <PageWithFetch
                  fetchFunction={() =>
                    fetch(`https://example.com/concerns-details`)
                  }
                  duration={5000}
                >
                  <ConcernDetails />
                </PageWithFetch>
              }
            />
          </Routes>
        </div>
      </PageTransition>
    </Router>
  );
}

const PageTransition = ({ children, displaySplash, fetchDataWithSplash }) => {
  const location = useLocation();

  useEffect(() => {
    displaySplash(7000);
  }, [location]);

  return <>{children}</>;
};

const PageWithFetch = ({ fetchFunction, duration, children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setShowSplash(true);
      try {
        await fetchFunction();
      } finally {
        setTimeout(() => setShowSplash(false), duration);
      }
    };
    fetchData();
  }, [fetchFunction, duration]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return children;
};

export default App;
