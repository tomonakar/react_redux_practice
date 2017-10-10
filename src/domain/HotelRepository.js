import geolib from 'geolib';

import Rakuten from '../lib/Rakuten';

const RAKUTEN_API_ID = '1005486963210399200';

// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_API_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then(result =>
      result.data.hotels.map((hotel) => {
        console.log(hotel);
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        const distance = geolib.getDistance(
          { latitude: location.lat, longitude: location.lng },
          { latitude: basicInfo.latitude, longitude: basicInfo.longitude },
        );
        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
          thumbUrl: basicInfo.hotelThumbnailUrl,
          price: basicInfo.hotelMinCharge,
          reviewCount: basicInfo.reviewCount,
          reviewAverage: basicInfo.reviewAverage,
          distance,
        };
      }),
    );
};
