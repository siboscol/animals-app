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
      image: `/images/Types/${type}.jpg`
    };
    globalTypesList.push(globalType);
  }
  return globalTypesList;
};

export { getAnimalsTypeList, removeAnimalByName, getAnimalsByType };
