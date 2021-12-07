import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="left__header">
                <i className="facebookIcon__left fab fa-facebook"></i>
                <form className="formSearch__left">
                    <i className=" seachIcon__left fas fa-search"></i>
                    <input type="text" placeholder="Search Facebook" />
                </form>
            </div>

            <div className="center__header">
                <ul className="navbar__header">
                    <li>
                        <i class="fas fa-home"></i>
                    </li>
                    <li>
                        <i class="fas fa-flag"></i>
                    </li>
                    <li>
                        <i class="fas fa-tv"></i>
                    </li>
                    <li>
                        <i class="fas fa-user-friends"></i>
                    </li>
                    <li>
                        <i class="fas fa-store"></i>
                    </li>
                </ul>
            </div>

            <div className="right__header">
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                    alt=""
                    className="avatarRight"
                />
                <span className="profileName">Hoàng Huy</span>
                <a href="/"><i class="acountIcon fas fa-plus"></i></a>
            </div>
        </div>
    );
}

export default Header;
