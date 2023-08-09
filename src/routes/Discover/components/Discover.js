import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import {
  fetchBrowseGenres,
  fetchFeaturedPlaylists,
  fetchReleasedThisWeek,
} from "../../../helpers/api";

export default class Discover extends Component {
  constructor() {
    super();
    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }
  async fetchInitialData() {
    try {
      const [newReleases, categories, playlists] = await Promise.all([
        fetchReleasedThisWeek(),
        fetchBrowseGenres(),
        fetchFeaturedPlaylists(),
      ]);
      this.setState({ newReleases, categories, playlists });
    } catch (e) {
      console.log(e);
    }
  }
  componentDidMount() {
    this.fetchInitialData();
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
