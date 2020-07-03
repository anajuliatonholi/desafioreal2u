import React from "react";

function RepositoryList(props) {
  const { repositories, onSelect } = props;
  return (
    <div className="repository-list">
      {repositories.map(function (repo) {
        return (
          <div onClick={() => onSelect(repo.id)} key={repo.id}>
            {repo.name}
          </div>
        );
      })}
    </div>
  );
}

export default RepositoryList;
