import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeOptionModalState } from "../stores/slices/modalSlice"
import { deleteUser, GetUserList } from "../service/ApiCalls";
import { setUsers } from "../stores/slices/loginSlice"

function OptionModal() {
    const { optionModalState, selectedUser } = useSelector(state => state.home);
    const dispatch = useDispatch()
    const token = localStorage.getItem("auth");

    const closeModal = (event) => {
        dispatch(changeOptionModalState(!optionModalState))
    }
    const onSubmid = async (event) => {
        await deleteUser(token, selectedUser.userId);
        let response = await GetUserList(token);
        dispatch(setUsers(response.data));
        closeModal();
    }
    return (
        optionModalState ?
            <div className="modal zindex-modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog w-50" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title " id="exampleModalLabel">Are you sure you want to delete?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>NO</button>
                            <button type="button" className="btn btn-primary" onClick={onSubmid} >Yes</button>
                        </div>
                    </div>
                </div>
            </div> : ""
    );
}

export default OptionModal;
