import axios from "axios";

export async function fetchAdvice(URL, { signal } = {}) {
	try {
		const data = await axios.get(URL, { signal });
		return data.data;
	} catch (error) {
		console.error("There is an error while fetching quote", error);
	}
}