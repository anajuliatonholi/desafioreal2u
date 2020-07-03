import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import InputText from "./components/InputText";
import RepositoryList from "./components/RepositoryList";
import FavoritesList from "./components/FavoritesList";
import RepositoryInformation from "./components/RepositoryInformation";
import Issues from "./components/Issues";
import { getRepositoryData, getIssues } from "./services/RepositoryService";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const [issues, setIssues] = useState([]);
  const [selectedRepository, setSelectedRepository] = useState("");
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(repoData) {
    if (!favorites.some((favorite) => favorite.id === repoData.id)) {
      setFavorites([...favorites, repoData]);
    }
  }

  function onSelectFavorite(favorite) {
    doSearch(favorite.owner.login, favorite.id);
  }

  async function doSearch(userName, selectedRepo) {
    const list = await getRepositoryData(userName);
    setUser("");
    setRepositories(list);
    setSelectedRepository(selectedRepo || "");
    setIssues([]);
  }
  const selectedRepositoryInfo = repositories.find(
    (repo) => repo.id === selectedRepository
  );
  useEffect(() => {
    async function fetchIssues(info) {
      const repoIssues = await getIssues(info.owner.login, info.name);
      setIssues(repoIssues);
    }
    if (selectedRepositoryInfo) {
      fetchIssues(selectedRepositoryInfo);
    }
  }, [selectedRepositoryInfo]);

  return (
    <div className="app">
      <Header name="Real2u Challenge" />
      <div className="container">
        <InputText
          placeholder="Repository name"
          onChange={setUser}
          value={user}
          onSubmit={() => doSearch(user)}
        />
        <br />
        <button onClick={() => doSearch(user)}>Search</button>
        <FavoritesList onSelect={onSelectFavorite} list={favorites} />
        <div className="informations">
          <RepositoryList
            onSelect={setSelectedRepository}
            list={repositories}
          />
          <RepositoryInformation
            onFavorite={addToFavorites}
            repository={selectedRepositoryInfo}
          />
          <Issues list={issues} />
        </div>
      </div>
    </div>
  );
}

export default App;
