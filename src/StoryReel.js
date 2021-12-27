import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import { useStateValue } from "./StateProvider";

function StoryReel() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="storyReel">
            <Story
                image="https://images.pexels.com/photos/10390462/pexels-photo-10390462.jpeg?cs=srgb&dl=pexels-pelageia-zelenina-10390462.jpg&fm=jpg"
                profileSrc={user.photoURL}
                title={user.displayName}
            />

            <Story
                image="https://images.pexels.com/photos/7633766/pexels-photo-7633766.jpeg?cs=srgb&dl=pexels-beyza-efe-7633766.jpg&fm=jpg"
                profileSrc="https://images.pexels.com/photos/6087669/pexels-photo-6087669.jpeg?cs=srgb&dl=pexels-koolshooters-6087669.jpg&fm=jpg"
                title="Ngọc Quỳnh"
            />

            <Story
                image="https://images.pexels.com/photos/3444345/pexels-photo-3444345.png?cs=srgb&dl=pexels-kristina-paukshtite-3444345.jpg&fm=jpg"
                profileSrc="https://images.pexels.com/photos/5859236/pexels-photo-5859236.jpeg?cs=srgb&dl=pexels-charles-parker-5859236.jpg&fm=jpg"
                title="Ngọc Nhi"
            />

            <Story
                image="https://images.pexels.com/photos/1684236/pexels-photo-1684236.jpeg?cs=srgb&dl=pexels-nick-collins-1684236.jpg&fm=jpg"
                profileSrc="https://images.pexels.com/photos/9942427/pexels-photo-9942427.jpeg?cs=srgb&dl=pexels-natalia-kolotvina-9942427.jpg&fm=jpg"
                title="Quyên Hoàng"
            />

            <Story
                image="https://images.pexels.com/photos/6210931/pexels-photo-6210931.jpeg?cs=srgb&dl=pexels-tim-douglas-6210931.jpg&fm=jpg"
                profileSrc="https://images.pexels.com/photos/10308478/pexels-photo-10308478.jpeg?cs=srgb&dl=pexels-galina-yarovaya-10308478.jpg&fm=jpg"
                title="Quỳnh Hoàng"
            />
        </div>
    );
}

export default StoryReel;
