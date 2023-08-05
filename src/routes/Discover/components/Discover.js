import React from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import {
  useGetCategoriesQuery,
  useGetFeaturedPlaylistsQuery,
  useGetNewreleasesQuery,
} from "../../../api/spotifyApi";

const Discover = () => {
  const categoriesQuery = useGetCategoriesQuery();
  const categories = categoriesQuery.data?.categories?.items || [];
  const newReleasesQuery = useGetNewreleasesQuery();
  const newReleases = newReleasesQuery.data?.albums?.items || [];
  const featuredPlaylistsQuery = useGetFeaturedPlaylistsQuery();
  const featuredPlaylists = featuredPlaylistsQuery.data?.playlists?.items || [];

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
        loading={newReleasesQuery.isLoading}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={featuredPlaylists}
        loading={featuredPlaylistsQuery.isLoading}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
        loading={categoriesQuery.isLoading}
      />
    </div>
  );
};

export default Discover;
