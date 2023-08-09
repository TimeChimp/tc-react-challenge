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
      this.setState({ ...this.state, isLoading: true });
      const [newReleases, categories, playlists] = await Promise.all([
        fetchReleasedThisWeek(),
        fetchBrowseGenres(),
        fetchFeaturedPlaylists(),
      ]);
      this.setState({ newReleases, categories, playlists, isLoading: false });
    } catch (e) {
      this.setState({ isLoading: false });
      console.log(e);
    }
  }
  componentDidMount() {
    this.fetchInitialData();
  }

  render() {
    const { newReleases, playlists, categories, isLoading } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          isLoading={isLoading}
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          isLoading={isLoading}
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          isLoading={isLoading}
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
