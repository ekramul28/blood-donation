import useAllRequest from "../../../hooks/useAllRequest";
import useAllUser from "../../../hooks/useAllUser";
import Welcome from "../../../shared/Welcome/Welcome";

const AdminHome = () => {
    const [user] = useAllUser();
    const [, requestData] = useAllRequest();
    return (
        <div className="">
            <Welcome></Welcome>
            <div className="stats shadow flex justify-center items-center mt-5">

                <div className="stat place-items-center">
                    <div className="stat-title"> Total Requests</div>
                    <div className="stat-value">{requestData.length}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value text-secondary">{user.length}</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title"> Total Funding</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;