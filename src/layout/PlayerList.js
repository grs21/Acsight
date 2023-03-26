import React from "react";
import { useSelector } from 'react-redux'
import Filter from "../component/Filter";
import User from "../component/UserCard";

function PlayerList() {
    const { auth, userList } = useSelector(state => state.login);
    const { filtersList } = useSelector(state => state.filter);

    const filteredList = () => {
        let filteredList = [];
        let temp = userList;
        if (filtersList.active) {
            filteredList.push(...temp.filter(user => user.status === "active"))
            temp = temp.filter(user => user.status !== "active");
        }
        if (filtersList.passive) {
            filteredList.push(...temp.filter(user => user.status === "inactive"))
            temp = temp.filter(user => user.status !== "inactive");
        }
        if (filtersList.male) {
            filteredList.push(...temp.filter(user => user.gender === "male"))
            temp = temp.filter(user => user.gender !== "male");
        }
        if (filtersList.female) {
            filteredList.push(...temp.filter(user => user.gender === "female"))
            temp = temp.filter(user => user.gender !== "female");
        }
        if (filteredList.length === 0) {
            return userList;
        }
        return filteredList;
    }

    return (
        <div className="d-flex w-100">
            <div className="card filter col-md-2 text-left h-50 ml-3">
                <Filter />
            </div>
            <div className="col-md-8 mb-4">
                {(userList !== null && userList !== undefined) ? filteredList().map(user => (
                    <User user={user} />
                )) : <div>Error loading list</div>}
            </div>
        </div>
    );
}

export default PlayerList;
