import usePayment from "../../../hooks/usePayment";



const EnrolledClasses = () => {
    const [payments] = usePayment();
    console.log(payments);
    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl">Total Enrolled Classes: {payments.length}</h3>                
            </div>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Image</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>                            
                            <th>Price</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((p, index) => <tr key={p._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={p.classImage
                                                } />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {p.className
                                    }
                                </td>
                                <td>{p.instructorName
                                }</td>                                
                                <td>
                                    {p.price}
                                </td>                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;