import {feedback} from "common/src/feedbackTypes.ts";

export function FeedBackDisplay(props:{feedback:feedback}) {
    return(
        <div className={"justify-items-center  w-full text-2xl border-2 border-gray-400 rounded-2xl p-10 flex flex-col gap-5 rounded-2"}>
            <div className={"flex flex-col justify-items-center gap-2 px-10"}>
                <h1>Name:</h1>
                <p className={"pl-16"}>{props.feedback.employee.name}</p>
            </div>
            <div className={"flex flex-col justify-items-center gap-2 px-10"}>
                <h1>Feedback:</h1>
                <p className={"pl-16"}>{props.feedback.feedback}</p>
            </div>
        </div>
    );
}
