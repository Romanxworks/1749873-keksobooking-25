
function createAd({author, offer}){
  const popupAdTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupAdElement = popupAdTemplate.cloneNode(true);
  popupAdElement.querySelector('.popup__title').textContent = offer.title;
  popupAdElement.querySelector('.popup__text--address').textContent = offer.address;
  popupAdElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupAdElement.querySelector('.popup__type').textContent =offer.type;
  popupAdElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupAdElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupAdElement.querySelector('.popup__avatar').src = author.avatar;
  const adFeatures = popupAdElement.querySelectorAll('.popup__feature');
  const modifiers = offer.features.map((userAdsFeature)=> `popup__feature--${userAdsFeature}`);
  adFeatures.forEach((adFeaturesElement)=>{
    const modifier = adFeaturesElement.classList[1];
    if(!modifiers.includes(modifier)){
      adFeaturesElement.remove();
    }
  });
  popupAdElement.querySelector('.popup__description').textContent =  offer.description;
  const userAdImageContainer = popupAdElement.querySelector('.popup__photos');
  const userAdImage =  popupAdElement.querySelector('.popup__photo');
  userAdImageContainer.innerHTML = '';
  offer.photos.forEach((userPhoto)=>{
    const userAdImageElement = userAdImage.cloneNode(true);
    userAdImageElement.src = userPhoto;
    userAdImageContainer.append(userAdImageElement);
  });
  return popupAdElement;
}

export {createAd};
