type Params = Record<string, string>[];

const generateUrl = (params: Params, path = '/plants/search') => {
  const token = Bun.env.API_TOKEN ?? '';
  const url = new URL(`https://trefle.io/api/v1/${path}`);

  url.searchParams.set('token', token);

  params.forEach((param) => {
    const [key, value] = Object.entries(param);
    url.searchParams.set(`${key}`, `${value}`);
  });

  const endpoint = url.toString();

  console.log(endpoint);
  return url;
};

export const getPlants = async () => {
  const url = generateUrl([{}], 'plants');

  const response = await fetch(url);

  return await response.json();
};

export const getPlant = async (plant: string) => {
  const url = generateUrl([{ q: plant }], 'species');

  const response = await fetch(url);

  return await response.json();
};

export const getPlantByGenus = async (genus: string) => {
  const url = generateUrl([{ q: genus }], 'genus');

  const response = await fetch(url);

  return await response.json();
};

export const getByQuery = async (query: string) => {
  const url = generateUrl([{ q: query }]);

  const response = await fetch(url);

  return await response.json();
};
