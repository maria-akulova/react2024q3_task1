const api = {
  getAnimals: async (searchTerm: string) => {
    return await fetch('https://stapi.co/api/v1/rest/animal/search?pageNumber=0&pageSize=20', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(`name=${searchTerm}`),
    })
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => err);
  },
  getAnimalDetails: async (animalID: string) => {
    return await fetch(`https://stapi.co/api/v1/rest/animal?uid=${animalID}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(async (res) => {
        const data = await res.json();
        return data;
      })
      .catch((err) => err);
  },
};
export default api;
