import client from '../../../api/client';

const adsUrl = '/api/v1/adverts';

export const getLatestAds = () => {
  const url = adsUrl;
  return client.get(url);
};
