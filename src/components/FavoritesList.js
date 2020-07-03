import React from "react";

import "./style/FavoriteList.css";

function FavoritesList(props) {
  const { list, onSelect } = props;
  return (
    list.length > 0 && (
      <div className="favorite-list">
        <h3>Favorites</h3>
        {list.map(function (favorite) {
          return (
            <div
              className="favorite"
              onClick={() => onSelect(favorite)}
              key={favorite}
            >
              {favorite.owner.login}/{favorite.name}
            </div>
          );
        })}
      </div>
    )
  );
}

export default FavoritesList;
