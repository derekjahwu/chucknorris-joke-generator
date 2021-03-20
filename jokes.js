
// GET with Async

class jokesGen {
    //make GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
}