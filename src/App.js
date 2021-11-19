import React, { useEffect, useState } from "react";
import Axios from "axios";

import PinnedRepo from "./Screens/PinnedRepo";
import "./App.css";

function App() {
  // const Github Repo
  // language;
  const [gitRepos, getRepo] = useState([]);
  useEffect(() => {
    Axios.get(`https://api.github.com/users/vanderkilu/repos?per_page=15&${process.env.REACT_APP_CLIENT_ID}&${process.env.REACT_APP_CLIENT_ID}`).then((response) => {
      //filter out repos who dont have a language and description
      let newRepo = [];
      (response.data || []).map((res) => {
        if (res.description && res.language && res.stargazers_count >= 0) {
          return newRepo.push(res);
        }
      });
      getRepo(newRepo);
    });
  }, []);

  return (
    <div className="container">
      <div className="row pt-5 mt-5">
        <div className="col-3">
          {" "}
          <side className="profile bg-dark">
            {" "}
            <h1>sidebar</h1>{" "}
          </side>
        </div>
        <div className="col-9">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <p className="h6">Pinned</p>
            <p className="customize text-muted text-decoration-none">Customize your pins</p>
          </div>
          <div className="row">
            {gitRepos.map((repo) => {
              return <PinnedRepo repo={repo} key={repo.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
