const api = {
  getAnimals: async () => {
    const url = `https://stapi.co/api/v1/rest/animal/search?pageNumber=1&pageSize=50`;
    return await fetch(url)
      .then(async (res) => {
        const data = (await res.json()) as string[];
        return data;
      })
      .catch((err) => err);
  },
};

export default api;
