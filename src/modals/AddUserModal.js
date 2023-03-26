import React from "react"
import { useSelector } from 'react-redux'
import AddUser from "../layout/AddUser"

function DetailModal() {
  const { addModalState } = useSelector(state => state.home);

  return (
    addModalState ?
      <div className="modal zindex-modal-backdrop">
        <AddUser />
      </div> : ""
  );
}

export default DetailModal;
