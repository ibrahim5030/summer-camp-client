import { useQuery } from "@tanstack/react-query";


const useSports = () => {
    const { data: sports = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['sports'],        
        queryFn: async()=>{
            const res = await fetch('https://b7a12-summer-camp-server-psi.vercel.app/sports');
            return res.json();
        }
      })
      console.log(sports);
      return [sports, loading, refetch];
};

export default useSports;