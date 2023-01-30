import { Star } from "./Star";

export const Stars = ({ count }) => {
    let stars = [];
    if (count >= 1 && count <= 5) {
        for (let i = 0; i < count; i++) {
            stars.push(<Star />);
        }
    }

    return <ul className="card-body-stars">{stars}</ul>;
};
