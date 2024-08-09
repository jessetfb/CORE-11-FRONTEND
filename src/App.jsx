// src/App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import unsplash from "./api/unsplash";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [pins, setPins] = useState([]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpdateProfile = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const getImages = (term) => {
    return unsplash.get("/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      const results = res.data.results;
      setPins((prevPins) => {
        const newPins = [...results, ...prevPins];
        return newPins.sort(() => 0.5 - Math.random());
      });
    });
  };

  const getNewPins = () => {
    const pinTerms = [
      "Spiderman",
      "shoes",
      "dogs",
      "cats",
      "city",
      "buildings",
      "cars",
      "Tattoo",
    ];
    const promises = pinTerms.map((term) =>
      getImages(term).then((res) => res.data.results)
    );

    Promise.all(promises).then((allResults) => {
      const pinData = allResults.flat().sort(() => 0.5 - Math.random());
      setPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar onSubmit={onSearchSubmit} />
        <Routes
          pins={pins}
          onImageClick={setSelectedImage}
          user={user}
          onUpdateProfile={handleUpdateProfile}
          onLogout={handleLogout}
          onSearchSubmit={onSearchSubmit}
        />
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.urls.full}
                alt={selectedImage.alt_description || "Selected"}
                className="w-full h-auto rounded"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">
                  {selectedImage.alt_description || "No Title"}
                </h2>
                <p className="text-gray-600">by {selectedImage.user.name}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-white-500 text-black px-4 py-2 rounded hover:bg-red-600">
                  Comment
                </button>
                <button className="bg-black-500 text-black px-4 py-2 rounded hover:bg-black-600">
                  Follow
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Save
                </button>
              </div>
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={() => setSelectedImage(null)}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
