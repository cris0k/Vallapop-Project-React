import client from '../../../api/client';

const adsUrl = '/api/ads';

export const getLatestAds = () => {
  const url = adsUrl;
  return client.get(url);
};
