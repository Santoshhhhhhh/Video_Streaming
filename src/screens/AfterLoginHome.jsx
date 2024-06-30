import React from "react";
import { Component } from "../../components/Component";
import { Play } from "../../icons/Play";
import "./style.css";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import movieDetails from "./MoviesDetails";

export const AfterLoginHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Perform the search whenever searchTerm changes
    const filteredMovies = movieDetails.filter((movieItem) => {
      return movieItem.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(filteredMovies);
  }, [searchTerm]);

  const handleSearch = () => {
    // Trigger the search when the search button is clicked
    const filteredMovies = movieDetails.filter((movieItem) => {
      return movieItem.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(filteredMovies);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const showMovieDetails = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  document.body.style.zoom = "80%";
  

  return (
    <>
      <div className="after-login-home">
        <div className="div" id="zoomdiv" >
          <div class="fix">
          <div className="nev-menu">
            <div className="logo">
              <div className="overlap-group-2">
                <div className="group" />
              </div>
              <img className="union" alt="Union" src="/img/union-2.png" />
            </div>
            <div className="menu">
              <a target="" id="smooth-scroll" href="#">
                <div className="frame">
                  <img className="img-2" alt="Frame" src="/img/frame-2.svg" />
                  <div className="text-wrapper">Home</div>
                </div>
              </a>
              <a target="" id="smooth-scroll" href="#mostpopular">
                <div className="frame-2">
                  <img
                    className="img-2"
                    alt="Svgexport"
                    src="/img/svgexport-6.svg"
                  />
                  <a
                    id="smooth-scroll"
                    href="#mostpopular"
                    onClick="#mostpopular"
                  >
                    <div className="text-wrapper-2">Movie</div>
                  </a>
                </div>
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                <div className="frame-4">
                  <img
                    className="img-2"
                    alt="Svgexport"
                    src="/img/svgexport-8.svg"
                  />
                  <div className="text-wrapper-4">Music Video</div>
                </div>
              </a>

              <a
                id="smooth-scroll"
                href="https://omkaarr1.github.io/MookingBookingWebsite/"
              >
                <div className="frame-6">
                  <img
                    className="img-2"
                    alt="Movies outline"
                    src="/img/movies-outline.png"
                  />
                  <div className="text-wrapper-6">Book Tickets</div>
                </div>
              </a>
            </div>
            <button onClick={handleShowModal} className="link" id="btn-btn">
              <img className="frame-7" alt="Frame" src="/img/frame.svg" />
            </button>
          </div></div>

          <div className="most-popular" >
            <div className="most-popular-2">
              <div className="text-wrapper-7" id="mostpopular">
                Most Popular
              </div>  
            </div>
            <div className="most-popular-3">
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/WandaVision.S01E06.WEBRip.x264-ION10.mp4"
              >
                <Component className="component-1" />
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/LondonHasFallen.mkv"
              >
                <Component  
                  className="component-instance"
                  text="London has Fallen"
                />
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/PiratesOfTheCaribbean.mp4"
              >
                <Component
                  className="component-1-instance"
                  text="Pirates of the Caribbean"
                />
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/ShaadiMeinZaroorAana.mkv"
              >
                <Component
                  className="design-component-instance-node"
                  text="Shadi me Zoroor Aana"
                />
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/Shukranu.mkv"
              >
                <Component className="component-2" text="Shukranu" />
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/Ant_Man_and_the_Wasp_2018_BluRay_Hindi_English_480p_ESub_mkvCinemas.mkv"
              >
                <Component className="component-3" text="Ant-man(MARVEL)" />
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/Shang-Chi.2021.480p.BluRay.Hindi-English.ESub.x264.mkv"
              >
                <Component className="component-4" text="Shang-Chi" />
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/ResidentEvil.mkv"
              >
                <Component className="component-5" text="Resident Evil" />
              </a>
            </div>
          </div>
          <div className="movies-for-you"  id="header custom-scroll">
            <div className="movi">
              <div className="text-wrapper-7" id="drama">
                Movies for you
              </div>
            </div>
            <div className="frame-9">
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/AvengersInfinityWar.mp4"
              >
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="rectangle-4" />
                    <div className="text-wrapper-13">Avengers Infinity War</div>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/Black_Panther_2018_BluRay_Hindi_English_480p_ESub_mkvCinemas.mkv"
              >
                <div className="overlap-wrapper">
                  <div className="overlap">
                    <div className="rectangle-4" />
                    <div className="text-wrapper-13">Black Panther</div>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/Morbius.mkv"
              >
                <div className="group-9">
                  <div className="overlap-2">
                    <div className="rectangle-4" />
                    <div className="text-wrapper-13">Morbius</div>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/Avatar.mkv"
              >
                {" "}
                <div className="group-10">
                  <div className="overlap-3">
                    <div className="rectangle-4" />
                    <div className="text-wrapper-13">Avatar</div>
                  </div>
                </div>
              </a>

              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/DoctorStrangenTheMultiverseOfMadness.mkv"
              >
                {" "}
                <div className="group-11">
                  <div className="overlap-4">
                    <div className="rectangle-4" />
                    <div className="text-wrapper-13">Doctor Strange</div>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                id="smooth-scroll"
                href="https://storage.cloud.google.com/movies404/Movies/IronMamn.mkv"
              >
                <div className="group-12">
                  <div className="overlap-5">
                    <div className="rectangle-4" />
                    <div className="text-wrapper-13">Iron Man</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <footer className="footer">
            <div className="rectangle-5" />
            <div className="logo-2">
              <div className="overlap-group-5">
                {/* <img className="vector-2" alt="Vector" src="/img/vector-1.svg" /> */}
                {/* <img className="vector-3" alt="Vector" src="/img/vector.svg" /> */}
                <div className="group-13" />
              </div>
              <img alt="Union" src="/img/union-2.png" id="new" />
            </div>
            <div className="group-wrapper">
              <a id="smooth-scroll" href="#">
                <div className="priority-up-wrapper">
                  <img
                    className="priority-up"
                    alt="Priority up"
                    src="/img/priority-up.svg"
                  />
                </div>
              </a>
            </div>
            <div className="group-14">
              <div className="group-15">
                <div className="text-wrapper-14">Feedback</div>
                <div className="text-wrapper-15">Help</div>
                <div className="text-wrapper-16">FAQ</div>
                <img className="line" alt="Line" src="/img/line-8.svg" />
                <img className="line-2" alt="Line" src="/img/line-8.svg" />
              </div>
              <div className="group-16">
                <div className="text-wrapper-17">FOLLOW ON</div>
                <img
                  className="social-icons"
                  alt="Social icons"
                  src="/img/social-icons.png"
                />
              </div>
            </div>
            <div className="text-wrapper-18">©2023 All rights reserved</div>
          </footer>
          <div className="overlap-11">
            <div className="group-17">
              <div className="overlap-12">
                <img
                  className="rectangle-6"
                  alt="Rectangle"
                  src="https://spitfireaudio.imgix.net/77a191f4-76bc-460a-bed7-8d36c2b02653/LOKI2.jpeg?auto=format&crop=entropy&fit=crop&fm=jpg&h=630&q=80&rect=148%2C0%2C1621%2C1080&w=1200"
                />
                <div className="overly" />
              </div>
            </div>
            <div className="group-18">
              <p className="text-wrapper-19">
                Action, Thriller • 2023 • 45m
              </p>
              <p className="the-trailer-of">
              Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."
              </p>
              <div className="text-wrapper-20">Loki Season 2 Episode 1</div>
            </div>
            <a
              target="_blank"
              id="smooth-scroll"
              href="https://storage.cloud.google.com/movies404/Movies/Loki.S02E01.WEB.x264-TORRENTGALAXY.mp4"
            >
              <button className="button">
                <img className="group-19" alt="Group" src="/img/group-61.png" />
                <div className="text-wrapper-21">Play Now</div>
              </button>
            </a>
            <a id="smooth-scroll" href="#">
              {" "}
            </a>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Search Modal"
      >
        <button className="x" onClick={closeModal}>
          X
        </button>
        <div className="container">
          <div className="search-page">
            <div className="search-content">
              <input
                className="search_box"
                type="text"
                placeholder="Search for moviess..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="button" onClick={handleSearch}>
                Search
              </button>
              <button className="clear" onClick={clearSearch}>
                Clear
              </button>

              <h2>Search Results</h2>
              <ul>
                {searchResults.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => showMovieDetails(item)}
                    className="search-result-item"
                  >
                    <a href={item.Link}>
                      {" "}
                      <div className="movies-item">
                        <img
                          src={item.Img}
                          alt={item.Title}
                          className="movies-image"
                          style={{ width: "100px", height: "100px" }}
                        />
                        <div className="movies-details">
                          <h3>{item.Title}</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
                {searchResults.length === 0 && <p>No results found.</p>}
              </ul>
            </div>
          </div>
        </div>

        {selectedMovie && (
          <movieDetails movies={selectedMovie} onClose={movieDetails} />
        )}
      </Modal>
    </>
  );
};

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
