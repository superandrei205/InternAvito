export default class ApiService {
    URL_API = "http://134.209.138.34/";

    getFlatsList = async () => {
        const response = await fetch(`${this.URL_API}items`);
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    };

    getFlatItem = async id => {
        const response = await fetch(`${this.URL_API}item/${id}`);
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    };
}
