import useSports from "../../hooks/useSports";
import Teachers from "../Teachers/Teachers";


const Instructors = () => {
    const [allSports] = useSports();    
    return (
        <div>
            <div>
                <div className="mt-16">
                    <h3 className="text-3xl text-center py-1 underline underline-offset-8">Sports Instructors</h3>
                    <div className="w-10/12 mx-auto md:grid md:grid-cols-2 gap-5 my-10">
                        {
                            allSports.map(instr => <Teachers key={instr._id} instr={instr}></Teachers>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;