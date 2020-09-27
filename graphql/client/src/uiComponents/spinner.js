import React from "react";

export const Spinner = (props) => (
    <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading {props.loadingText}...</span>
    </div>
)