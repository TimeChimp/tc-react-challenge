import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import {
  selectCategories,
  selectDiscoverDataLoading,
  selectNewReleases,
  selectPlaylists
} from "../../../store/discover/selectors";
import { discoverActions } from "../../../store/discover/actions";

const Discover = () => {
  const dispatch = useDispatch();
  const newReleases = useSelector(selectNewReleases);
  const playLists = useSelector(selectPlaylists);
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectDiscoverDataLoading);

  useEffect(() => {
    dispatch(discoverActions.fetchDiscoverData());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress color="secondary" />
  } else {
    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playLists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    )
  }
}

export default Discover;
