import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Pages/Shared/SectionTitle";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const [paymentHistory, setPaymentHistory] = useState([])
    useEffect(() => {
        fetch(`https://nota-corda-server.vercel.app//payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPaymentHistory(data)
            })
    }, [user?.email])
    return (
        <div className=" w-full px-12">
            <SectionTitle heading={'Payment history'}/>
            <div className="overflow-x-auto rounded-t-2xl">
                <table className="table table-zebra ">
                   
                    <thead className="">
                        <tr className=" bg-sky-500  text-white">
                            <th></th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody className=" bg-sky-300 font-semibold">
                    {
                        paymentHistory && paymentHistory.map((item,i) =>  <tr key={item._id}>
                            <th>{i+1}</th>
                            <td>{item?.enrolledClass?.ClassName}</td>
                            <td>${item?.enrolledClass?.price}</td>
                            <td>{item?.email}</td>
                            <td>{item?.transactionId}</td>
                        </tr>)
                    }
                       
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;