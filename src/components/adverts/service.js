import client from '../../api/client';

const adsUrl = '/api/v1/adverts';

export const getLatestAds = () => {
  const url = adsUrl;
  return client.get(url);
};

export const getAdsDetail = adId => {
  const url = `${adsUrl}/${adId}`;
  return client.get(url);
};

export const createAdvert= ad => {
  const url = adsUrl;
  return client.post(url, ad);
};
