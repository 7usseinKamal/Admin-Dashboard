const initialState = { ads: [] };

const adsReducer = (state = initialState, action) => {
  if (action.type === "GET") {
    let newAds = [];
    // loop for all ads to edit it and add an Id to them
    for (let i = 0; i < action.payload.length; i++) {
      let newObj = {};
      newObj = {
        ...action.payload[i],
        // to start ID from 1
        id: i + 1,
      };
      newAds = [...newAds, newObj];
    }
    return {
      ads: newAds,
    };
  }
  if (action.type === "EDIT") {
    // get the index of the ad
    const singleItemIndex = state.ads.findIndex(
      (ad) => ad.id === action.payload.id
    );
    // get the ad itself
    const existingAd = state.ads[singleItemIndex];
    let updatedAds;
    if (existingAd) {
      // return brand new object and override the properties
      const updatedItem = {
        ...existingAd,
        from_time: action.payload.from,
        to_time: action.payload.to,
        image: action.payload.img ? action.payload.img : existingAd.image,
        video: action.payload.video ? action.payload.video : existingAd.video,
      };
      // copy the ads array to avoid poiner
      updatedAds = [...state.ads];
      // update the ad
      updatedAds[singleItemIndex] = updatedItem;
    }
    return {
      ads: updatedAds,
    };
  }
  if (action.type === "DELETE") {
    // return brand new array the not contain ad that holds id
    const filteredAds = state.ads.filter((ad) => ad.id !== action.payload);
    return {
      ads: filteredAds,
    };
  }
  if (action.type === "ADD") {
    let newAds = [...state.ads];
    newAds = [...newAds, action.payload];
    return {
      ads: newAds,
    };
  }
  return state;
};

export default adsReducer;
