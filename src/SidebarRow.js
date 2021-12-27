import React from "react";
import "./SidebarRow.css";
import Avatar from "@mui/material/Avatar";

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon className="sidebarRow__icon" />}
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;
