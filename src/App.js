import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loader from "./Screens/Loader";
import PinnedRepos from "./Screens/PinnedRepos";
import "./App.css";

function App() {
  // const Github Repo
  // language;
  const [gitRepos, getRepo] = useState([]);
  const [isloading, getIsLoading] = useState(true);
  useEffect(() => {
    Axios.get(`https://api.github.com/users/vanderkilu/repos?per_page=15&${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_ID}`).then((response) => {
      //filter out repos who dont have a language and description
      let newRepo = [];
      (response.data || []).map((res) => {
        if (res.description && res.language && res.stargazers_count >= 0) {
          return newRepo.push(res), getIsLoading(false);
        }
      });
      getRepo(newRepo);
    });
  }, []);

  return (
    <div className="container">
      <div className="row pt-5 mt-5">
        <div className="col-3">
          <side className="profile bg-dark">
            <h1>sidebar</h1>
          </side>
        </div>
        <div className="col-9">
          {isloading && <Loader />}

          {!isloading && (
            <div>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <p className="h6 text-muted">Pinned</p>
                <p className="customize text-muted text-decoration-none">Customize your pins</p>
              </div>

              <PinnedRepos gitRepos={gitRepos} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
