import axios from "axios";
import { OAuthToken, spotifyURLs } from "../constants/spotifyAPI";

class DiscoverService {
  constructor() {
    this.OAuthHeader = {
      Authorization: `Bearer ${OAuthToken}`,
    }
  }

  fetchNewReleases = async () => {
    const response = await axios.get(`${spotifyURLs.newReleases}`, {
      headers: this.OAuthHeader,
    });

    return response.data;
  }

  fetchPlaylists = async () => {
    const response = await axios.get(`${spotifyURLs.featurePlaylists}`, {
      headers: this.OAuthHeader,
    })

    return response.data;
  }

  fetchCategories = async () => {
    const response = await axios.get(`${spotifyURLs.categories}`, {
      headers: this.OAuthHeader,
    })

    return response.data;
  }
}

const serviceInstance = new DiscoverService();
export { serviceInstance as DiscoverService };

