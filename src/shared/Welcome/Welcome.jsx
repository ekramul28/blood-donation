import useAuth from '../../hooks/useAuth';

const Welcome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Hi,{user?.displayName} Welcome</h1>
        </div>
    );
};

export default Welcome;