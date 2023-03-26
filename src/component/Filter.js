import React from "react";
import CheckBoxInput from "./CheckBoxInput";

function Filter() {
    return (
        <div>
            <CheckBoxInput className="" text={"Active"} isCheked={true} />
            <CheckBoxInput className="" text={"Passive"} isCheked={true} />
            <CheckBoxInput className="" text={"Male"} isCheked={true} />
            <CheckBoxInput className="" text={"Female"} isCheked={true} />
        </div>
    );
}

export default Filter;
