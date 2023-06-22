import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const {user} = useContext(AuthContext);    
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = []} = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !!user?.email,
        queryFn: async () =>{
            const res = await axiosSecure(`/classes?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
      })
      return [classes, refetch];
    
};

export default useClasses;