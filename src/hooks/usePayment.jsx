import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const usePayment = () => {
    const {user} = useContext(AuthContext);    
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payments = []} = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !!user?.email,
        queryFn: async () =>{
            const res = await axiosSecure(`/payments?email=${user.email}`);            
            return res.data;
        },
      })
      return [payments, refetch];
    
};

export default usePayment;