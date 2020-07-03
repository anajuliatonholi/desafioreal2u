import React, { useState } from "react";

import Header from "./components/Header";
import InputText from "./components/InputText";
import RepositoryList from "./components/RepositoryList";
import RepositoryInformation from "./components/RepositoryInformation";

import { getRepositoryData } from "./services/RepositoryService";

function App() {
  const [repository, setRepository] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [selectedRepository, setSelectedRepository] = useState("");
  async function doSearch() {
    const list = await getRepositoryData(repository);
    setRepositories(list);
    setSelectedRepository("");
  }
  const selectedRepositoryInfo = repositories.find(
    (repo) => repo.id === selectedRepository
  );
  return (
    <div className="App">
      <Header name="Real2u Challenge" />
      <div className="container">
        Repository: {repository}
        <InputText onChange={setRepository} />
        <button onClick={doSearch}>Search</button>
        <RepositoryList
          onSelect={setSelectedRepository}
          repositories={repositories}
        />
        <RepositoryInformation repository={selectedRepositoryInfo} />
        {selectedRepository}
      </div>
    </div>
  );
}

export default App;
