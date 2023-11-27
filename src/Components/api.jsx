import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const DoneOrCancel = async ({ id, refetch, ok }) => {
    const axiosSecure = useAxiosSecure()

    const res = await axiosSecure.patch(`/request/${ok}/${id}`);
    console.log(res.data)
    if (res.data.modifiedCount > 0) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Done",
            showConfirmButton: false,
            timer: 1500

        });
        refetch()
    }
    return (
        <div>

        </div>
    );
};

export default DoneOrCancel;