import React from "react";

export const List = (props) => (
    <ul className="list-group">
    {
        props.items.map(
            item => (
                <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={item.id}
                >
                    {item.name}
                    <span className="badge badge-primary badge-pill">14</span>
                </li>
            )
        )
    }
    </ul>
);