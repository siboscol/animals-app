const groupBy = (key, array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const getAnimalsByType = (animals, type) => {
  const animalsGroupedByType = groupBy('type', animals);
  return animalsGroupedByType[type] || [];
};

const removeAnimalByName = (animals, name) => {
  return animals.filter(animal => animal.name !== name);
};

const getAnimalsTypeList = animals => {
  const animalsGroupedByType = groupBy('type', animals);
  const globalTypesList = [];
  for (let type in animalsGroupedByType) {
    const globalType = {
      type: type,
      individuals: animalsGroupedByType[type].length,
      diet: animalsGroupedByType[type][0].diet,
      cry: animalsGroupedByType[type][0].cry,
      image: !animalsGroupedByType[type][0].isGeneric ? `/images/Types/${type}.jpg` : '/images/Types/GenericSpecies.jpg'
    };
    globalTypesList.push(globalType);
  }
  return globalTypesList;
};

const callAPI = async (url) => {
  if (url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
};

const fetchSpecies = async () => {
  const url = 'http://api.gbif.org/v1/species';
  const res = await callAPI(url);
  return res;
};

const fetchCollection = async query => {
  if (query) {
    const url = `http://api.gbif.org/v1/species/${query}/children`;
    const res = await callAPI(url);
    return res;
  }
};

export {
  getAnimalsTypeList,
  removeAnimalByName,
  getAnimalsByType,
  fetchSpecies,
  fetchCollection
};
