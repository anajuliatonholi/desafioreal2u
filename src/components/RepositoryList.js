import React from "react";

import "./style/RepositoryList.css";

function RepositoryList(props) {
  const { list, onSelect } = props;
  return (
    list.length > 0 && (
      <div className="repository-list">
        <h3>Repositories</h3>
        {list.map(function (repo) {
          return (
            <div
              className="repository-item"
              onClick={() => onSelect(repo.id)}
              key={repo.id}
            >
              {repo.name}
            </div>
          );
        })}
      </div>
    )
  );
}

export default RepositoryList;
