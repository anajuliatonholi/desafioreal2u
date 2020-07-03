import React from "react";

function RepositoryInformation(props) {
  const { repository } = props;
  if (repository && repository.owner) {
    return (
      <div className="repository-information">{repository.owner.login}</div>
    );
  }
  return null;
}

export default RepositoryInformation;
