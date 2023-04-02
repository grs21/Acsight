import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PlayerList from "../layout/PlayerList";
import AddUserModal from "../modals/AddUserModal"
import { changeAddModalSatate } from "../stores/slices/modalSlice"
import { setToken } from "../stores/slices/loginSlice"
import ShowDetailModal from "../modals/ShowDetailModal";
import UpdateUserModal from "../modals/UpdateModal";
import OptionModal from "../modals/OptionModal";

function HomePage() {
    const { auth } = useSelector(state => state.login);
    const { detailModalState } = useSelector(state => state.home);
    const dispatch = useDispatch()

    const addButton = (event) => {
        dispatch(changeAddModalSatate(!detailModalState))
    }

    const handlerLogOut = (event) => {
        dispatch(setToken(""))
    }
    return (
        auth ?
            <div className="d-flex align-items-center flex-column mt-5">
                <button onClick={addButton} type="button" className="btn btn-default rounded-circle addButton zindex-modal-backdrop">+</button>
                <button onClick={handlerLogOut} type="button" className="btn btn-danger logOut">Sign Out</button>
                <AddUserModal />
                <ShowDetailModal />
                <UpdateUserModal />
                <OptionModal />
                <PlayerList />
            </div>
            : <Redirect to="/" />
    );
}

export default HomePage;