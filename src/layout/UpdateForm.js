import React from "react";
import { Croos } from "../assets/icons/assets"
import { useSelector, useDispatch } from 'react-redux';
import { changeUpdateModalState } from "../stores/slices/modalSlice"
import { GetUserList } from "../service/ApiCalls";
import { setUsers } from "../stores/slices/loginSlice"
import axios from "axios";

function UpdateForm() {
    const { updateModalState, selectedUser } = useSelector(state => state.home);
    const token = localStorage.getItem("auth");
    const dispatch = useDispatch()
    const user = selectedUser;

    const updateUser = async (event) => {
        event.preventDefault();
        let name = event.target[0].value === "" ? user.name : event.target[0].value;
        let email = event.target[1].value === "" ? user.email : event.target[1].value;
        const genderSelecter = document.getElementById("exampleFormControlSelect1");
        let gender = genderSelecter.options[genderSelecter.selectedIndex].text;
        const updatedData = {
            name: name,
            email: email,
            gender: gender,
            status: "active",
        }
        await axios.put(`https://gorest.co.in/public/v2/users/${user.userId}?access-token=${token}`, updatedData).then(function (response) {
            dispatch(changeUpdateModalState(!updateModalState))
        }).then(async function () {
            let response = await GetUserList(token);
            dispatch(setUsers(response.data));
        }).catch(function (error) {
            console.log(error);
        });
    }
    const handleCroosButton = (event) => {
        dispatch(changeUpdateModalState(!updateModalState))
    }

    return (
        <div className="col-md-8 mb-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h4>Update User</h4>
                    <div onClick={handleCroosButton}>
                        <Croos />
                    </div>
                </div>
                <form className="p-3" onSubmit={updateUser}>
                    <div className="form-group text-left">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            name="name"
                            id="name"
                            placeholder={selectedUser.name}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="email">E-mail</label>
                        <input type="email"
                            name="salary"
                            id="salary"
                            placeholder={selectedUser.email}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleFormControlSelect1">Select Gender</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>male</option>
                            <option>female</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-danger w-50 ">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateForm;
