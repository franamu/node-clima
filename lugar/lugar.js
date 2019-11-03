const axios = require('axios');

const getLugarLatLng = async (dir) => {

	const encodedUrl = encodeURI(dir);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
		headers: 
			{
				'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
				'x-rapidapi-key': '165d7b8807msh00c5e85dee51ec1p15e487jsnc87c4b327778'
			}
	});

	const resp = await instance.get();

	if (resp.data.Results.lengt === 0) {
		throw new Error(`No hay resultados para ${dir}`)
	}

	const data = resp.data.Results[0];
	const direccion = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return {
		direccion,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
}
