import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';
const HelmetAll = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </div>
    );
};
HelmetAll.propTypes = {
    title: PropTypes.string
}

export default HelmetAll;