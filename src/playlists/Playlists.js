import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import Subheader from "material-ui/Subheader";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: "40%",
    height: "80%"
  }
};

const Playlists = ({ playlists }) => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList}>
      <Subheader>Your Playlists</Subheader>
      {playlists.length === 0 ? (
        <p>No Playlists</p>
      ) : (
        playlists.map(playlist => (
          <a
            href={playlist.external_urls.spotify}
            target="_blank"
            key={playlist.id}
          >
            <GridTile
              title={playlist.name}
              subtitle={
                <span>
                  <b>{playlist.tracks.total}</b> tracks
                </span>
              }
            >
              <img src={playlist.images.length > 0 ? playlist.images[0].url : '/img/partycover.png'} alt="playlist" />
            </GridTile>
          </a>
        ))
      )}
    </GridList>
  </div>
);

export default Playlists;
