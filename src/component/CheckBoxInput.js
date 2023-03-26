import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "../stores/slices/filterSlice"

function CheckBoxInput(props) {
    const dispatch = useDispatch();
    const checkHandler = (event) => {
        const filterType = props.text.toLowerCase();
        const filter = {
            type: filterType,
            value: event.target.checked
        }
        dispatch(setFilter(filter));
    }

    return (
        <div class="form-check m-2">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={checkHandler} />
            <label class="form-check-label" htmlFor="defaultCheck1">
                {props.text}
            </label>
        </div>
    );
}

export default CheckBoxInput;
