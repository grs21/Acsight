import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PlayerList from "../layout/PlayerList";
import AddUserModal from "../modals/AddUserModal"
import { changeAddModalSatate } from "../stores/slices/modalSlice"
import ShowDetailModal from "../modals/ShowDetailModal";
import UpdateUserModal from "../modals/UpdateModal";
import OptionModal from "../modals/OptionModal";

function HomePage() {
    const { auth, userList } = useSelector(state => state.login);
    const { detailModalState } = useSelector(state => state.home);
    const dispatch = useDispatch()
    const addButton = (event) => {
        dispatch(changeAddModalSatate(!detailModalState))
    }
    return (
        auth ?
            <div className="d-flex align-items-center flex-column mt-5">
                <button onClick={addButton} type="button" className="btn btn-default rounded-circle addButton zindex-modal-backdrop">+</button>
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