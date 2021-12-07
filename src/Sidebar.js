import React from "react";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="listItem__sidebar">
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                    alt=""
                    className="avatarRight"
                />
                <span className="iconTitle__sidebar">Hoàng Huy</span>
            </div>

            <div className="listItem__sidebar">
                <i className="iconList__sidebar fas fa-plus-square"></i>
                <span className="iconTitle__sidebar">COVID-19 Information Center</span>
            </div>

            <div className="listItem__sidebar">
                <i className="iconList__sidebar far fa-flag"></i>
                <span className="iconTitle__sidebar">Pages</span>
            </div>

            <div className="listItem__sidebar">
                <i className="iconList__sidebar fas fa-user-friends"></i>
                <span className="iconTitle__sidebar">Friends</span>
            </div>

            <div className="listItem__sidebar">
                <i className="iconList__sidebar far fa-comment-dots"></i>
                <span className="iconTitle__sidebar">Messenger</span>
            </div>

            <div className="listItem__sidebar">
                <i className="iconList__sidebar fas fa-store"></i>
                <span className="iconTitle__sidebar">Marketplace</span>
            </div>

            <div className="listItem__sidebar">
                <i className="iconList__sidebar fas fa-tv"></i>
                <span className="iconTitle__sidebar">Videos</span>
            </div>

            <div className="listItem__sidebar">
                <i className="iconList__sidebar fas fa-chevron-down"></i>
                <span className="iconTitle__sidebar">See more</span>
            </div>
        </div>
    );
}

export default Sidebar;
