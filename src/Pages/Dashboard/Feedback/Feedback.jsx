import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Feedback = () => {
    const feedbackData = useLoaderData();
    console.log("data", feedbackData);

    const { _id} = feedbackData[0];    

    const handleFeedback = event => {
        event.preventDefault();

        const form = event.target;        
        const feedback = form.feedback.value;

        form.reset('');

        const sendFeedback = {feedback};
        console.log(sendFeedback);

        fetch(`https://b7a12-summer-camp-server-psi.vercel.app/sports/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendFeedback)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="w-9/12 mx-auto my-16">
            <p className="text-3xl font-bold text-center my-10">Send Feedback</p>
            
            <p className="text-3xl text-center my-10"></p>
            <form onSubmit={handleFeedback}>                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Feedback</span>
                    </label>
                    <label className="input-group">
                        <span>Your Feedback</span>
                        <input type="text" name="feedback"  placeholder="Write Your Feedback" className="input input-bordered w-full text-black" />
                    </label>
                </div>
                <input className="btn bg-cyan-600 w-full my-10" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Feedback;