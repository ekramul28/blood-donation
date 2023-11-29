import { Link } from "react-router-dom";

const ContentManagement = () => {
    return (
        <div>
            <div className="flex justify-end top-3">
                <Link to="addBlog">
                    <button className="text-white bg-red-500 btn">Add Blog</button>
                </Link>
            </div>
        </div>
    );
};

export default ContentManagement;