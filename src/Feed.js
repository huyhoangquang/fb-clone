import React from "react";
import "./Feed.css";

function Feed() {
    return (
        <div className="feed">
            <div className="listStory">
                <div className="storyWrapper">
                    <img
                        src="https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?cs=srgb&dl=pexels-gary-spears-250177.jpg&fm=jpg"
                        alt=""
                        className="avatarStory"
                    />
                    <img
                        src="https://images.pexels.com/photos/5485986/pexels-photo-5485986.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5485986.jpg&fm=jpg"
                        alt=""
                        className="imgStory"
                    />
                </div>

                <div className="storyWrapper">
                    <img
                        src="https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?cs=srgb&dl=pexels-gary-spears-250177.jpg&fm=jpg"
                        alt=""
                        className="avatarStory"
                    />
                    <img
                        src="https://images.pexels.com/photos/5485986/pexels-photo-5485986.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5485986.jpg&fm=jpg"
                        alt=""
                        className="imgStory"
                    />
                </div>

                <div className="storyWrapper">
                    <img
                        src="https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?cs=srgb&dl=pexels-gary-spears-250177.jpg&fm=jpg"
                        alt=""
                        className="avatarStory"
                    />
                    <img
                        src="https://images.pexels.com/photos/5485986/pexels-photo-5485986.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5485986.jpg&fm=jpg"
                        alt=""
                        className="imgStory"
                    />
                </div>

                <div className="storyWrapper">
                    <img
                        src="https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?cs=srgb&dl=pexels-gary-spears-250177.jpg&fm=jpg"
                        alt=""
                        className="avatarStory"
                    />
                    <img
                        src="https://images.pexels.com/photos/5485986/pexels-photo-5485986.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5485986.jpg&fm=jpg"
                        alt=""
                        className="imgStory"
                    />
                </div>

                <div className="storyWrapper">
                    <img
                        src="https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?cs=srgb&dl=pexels-gary-spears-250177.jpg&fm=jpg"
                        alt=""
                        className="avatarStory"
                    />
                    <img
                        src="https://images.pexels.com/photos/5485986/pexels-photo-5485986.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5485986.jpg&fm=jpg"
                        alt=""
                        className="imgStory"
                    />
                </div>
            </div>

            <div className="postNew">
                <div className="inputPost">
                    <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                        alt=""
                        className="avatarPost"
                    />
                    <input className="textPost" type="text" placeholder="What's on your mind, Hoàng Huy" />
                    <input className="imagePost" type="text" placeholder="image URL(Optional)" />
                </div>

                <div className="inputMedia">
                    <div className="itemMedia">
                        <i className="iconMedia videoMedia fas fa-video"></i>
                        <span>Live Video</span>
                    </div>
                    <div className="itemMedia">
                        <i className="iconMedia photoMedia far fa-images"></i>
                        <span>Photo/Video</span>
                    </div>
                    <div className="itemMedia">
                        <i className="iconMedia feelingMedia far fa-laugh"></i>
                        <span>Feeling/ACtivity</span>
                    </div>
                </div>
            </div>

            <div className="postList">list post</div>
        </div>
    );
}

export default Feed;
