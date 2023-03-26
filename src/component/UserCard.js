import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
import { changeUserDetailModalSatate, setSelectedUSer, changeUpdateModalState, changeOptionModalState } from "../stores/slices/modalSlice"
import { getUserDetail } from "../service/ApiCalls";

function User(props) {
    const user = props.user;
    const usermodal = {
        name: user.name,
        email: user.email,
        userId: user.id,
        status: user.status,
    }
    const token = localStorage.getItem("auth");
    const dispatch = useDispatch()
    const { showUserDetailState, updateModalState, optionModalState } = useSelector(state => state.home);
    const onDelete = async (event) => {
        dispatch(changeOptionModalState(!optionModalState))
        dispatch(setSelectedUSer(usermodal))
    }
    const showDetail = async (event) => {
        try {
            let response = await getUserDetail(token, usermodal.userId);
            let responseUser = response.data;
            var userData = {
                id: responseUser.id,
                email: responseUser.email,
                gender: responseUser.gender,
                name: responseUser.name,
                status: responseUser.status
            }
            dispatch(changeUserDetailModalSatate(!showUserDetailState))
            dispatch(setSelectedUSer(userData))
        } catch (error) {
            console.log(error);
        }
    }
    const updateUser = (event) => {
        dispatch(changeUpdateModalState(!updateModalState))
        dispatch(setSelectedUSer(usermodal))
    }
    return (
        <div className="w-100 mb-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between" style={{ cursor: "pointer" }}>
                    <h4 className="d-inline">{usermodal.name}</h4>
                    <div className="">
                        <button type="button" className="btn btn-info mr-3" onClick={updateUser}>Update User</button>
                        <button type="button" className="btn btn-info mr-3" onClick={showDetail}>Show Detail</button>
                        <i className="fa fa-trash-alt" data-toggle="modal" onClick={onDelete} style={{ cursor: "pointer" }}></i>
                    </div>
                </div>
                <div className="card-body text-left" >
                    <p className="card-text">e-mail: {usermodal.email} </p>
                </div>
            </div>
        </div>
    );
}

User.prototype = {
    user: PropTypes.object.isRequired
}
User.defaultProps = {
    user: {
        email: "",
        gender: "",
        name: "",
    }
}

export default User;
