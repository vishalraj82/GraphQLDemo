import React from "react";

export const Warning = (props) => (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {props.warning}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);