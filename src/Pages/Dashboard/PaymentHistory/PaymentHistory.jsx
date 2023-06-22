import usePayment from "../../../hooks/usePayment";



const PaymentHistory = () => {
    const [payments] = usePayment();
    console.log(payments);
    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl">Payment History</h3>                
            </div>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Date and Time</th>
                            <th>Price</th>                            
                            <th>Transaction Id</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((p, index) => <tr key={p._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {p.className}
                                </td>
                                <td>
                                    {p.date
                                    }
                                </td>
                                <td>${p.price}</td>                                
                                <td>
                                    {p.transactionId}
                                </td>                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;