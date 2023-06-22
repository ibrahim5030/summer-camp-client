import useSports from "../../hooks/useSports";
import Class from "../Class/Class";


const Classes = () => {
    const [allSports] = useSports(); 
    
    const approvedClass = allSports.filter(sprts => sprts.status === "approved");
    return (
        <div>
            <div>
                <div className="mt-16">
                    <h3 className="text-3xl text-center py-1 underline underline-offset-8">All Approved Classes</h3>
                    <div className="w-10/12 mx-auto md:grid md:grid-cols-2 gap-5 my-10">
                        {
                            approvedClass.map(cls => <Class key={cls._id} cls={cls}></Class>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;