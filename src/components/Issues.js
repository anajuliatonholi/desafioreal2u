import React from "react";

function Issues(props) {
  const { list } = props;
  return (
    list.length > 0 && (
      <div className="issue-list">
        <h3>Issues</h3>
        {list.map(function (issue) {
          return (
            <div>
              Issue {issue.number}:{" "}
              <a href={issue.html_url} target="_blank">
                {issue.title}
              </a>
            </div>
          );
        })}
      </div>
    )
  );
}

export default Issues;
