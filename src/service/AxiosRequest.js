import axios from "axios";
let baseUrl = "https://gorest.co.in/";

export async function callGetApi(url) {
    let response = await axios.get(baseUrl + url);
    return response;
}

export async function deleteCallApi(url) {
    let response = await axios.delete(baseUrl + url);
    return response;
}