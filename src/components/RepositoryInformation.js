import React from "react";

function RepositoryInformation(props) {
  const { repository, onFavorite } = props;

  function onClickFavorite() {
    onFavorite({
      owner: repository.owner,
      id: repository.id,
      name: repository.name,
    });
  }
  if (repository && repository.owner) {
    return (
      <div className="repository-information">
        <h3>About the repository {repository.name}</h3>
        <div className="owner-login">Owner: {repository.owner.login}</div>
        <div className="owner-photo">
          <img
            alt={`${repository.owner.login} github`}
            src={repository.owner.avatar_url}
          />
        </div>
        <div>
          <a href={repository.owner.html_url} target="_blank">
            See owner on Github
          </a>
          <br />
          <a href={repository.html_url} target="_blank">
            See repository on github
          </a>
        </div>
        <button onClick={onClickFavorite}>Add to favorites</button>
      </div>
    );
  }
  return null;
}

export default RepositoryInformation;
