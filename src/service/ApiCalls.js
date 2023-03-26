import { callGetApi, deleteCallApi } from "./AxiosRequest";

export async function GetUserList(token) {
    let response = await callGetApi(`public/v2/users?access-token=${token}`);
    return response;
}
export async function deleteUser(token, userId) {
    let response = await deleteCallApi(`public/v2/users/${userId}?access-token=${token}`);
    return response;
}
export async function getUserDetail(token, userId) {
    let response = await callGetApi(`public/v2/users/${userId}?access-token=${token}`);
    return response;
}