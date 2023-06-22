import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useMyClass = () => {
    const {user} = useContext(AuthContext);    
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: myclasses = []} = useQuery({
        queryKey: ['myclasses', user?.email],
        enabled: !!user?.email,
        queryFn: async () =>{
            const res = await axiosSecure(`/myclasses?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
      })
      return [myclasses, refetch];
};

export default useMyClass;