import {FeedBackDisplay} from "./FeedBackDisplay.tsx";
import {useEffect, useState} from "react";
import {feedback} from "common/src/feedbackTypes.ts";
import axios from "axios";

export function FeedbackGetter() {
    const [feedback,setFeedback] = useState<feedback[]>([]);
    useEffect(() => {

        axios.get("/api/feedback").then((res) => {
            console.log(res.data);
            setFeedback(res.data);
        });
    }, []);
    return(
        <div className={"flex flex-col gap-5"}>
            {
                feedback.length !== 0 ?
                    feedback.map((feedback) => {
                        return <FeedBackDisplay key={feedback.employee.name+feedback.feedback} feedback={feedback}></FeedBackDisplay>;
                    })
                    :
                    <div>no feedback</div>
            }
        </div>
    );
}
