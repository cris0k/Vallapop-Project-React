import client from '../../api/client';

const adsUrl = '/api/v1/adverts';
const config = {
  headers: {
      'Content-Type': 'multipart/form-data'
  }
}

export const getLatestAds = () => {
  const url = adsUrl;
  return client.get(url);
};

export const getAdsDetail = adId => {
  const url = `${adsUrl}/${adId}`;
  return client.get(url);
};

export const createAdvert = advert => {
  const url = adsUrl;
  return client.post(url, advert ,config)
  
  
};

export const deleteAdvert = adId => {
  const url = `${adsUrl}/${adId}`;
  return client.delete(url);
}

export const getTags = () =>{
  const url = `${adsUrl}/tags`;
  return client.get(url);
}
