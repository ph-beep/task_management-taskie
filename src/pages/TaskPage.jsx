import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] =  useSearchParams()
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
        <div className="h-screen bg-slate-950 p-6 justify-center flex">
            <div className="w-[500px] space-y-4">
                <div className="flex text-white relative mb-6">
                    <button onClick={() => navigate(-1)} className="absolute left-0 top-0 p-2 rounded-md">
                        <ChevronLeftIcon />
                    </button>
                </div>
                <h1 className="text-3xl text-slate-100 font-black text-center"
                >
                    Tasks Details
                </h1>
            <div className="bg-slate-500 rounded-md shadow-md flex text-center flex-col">
                <h2 className="text-xl text-white font-extrabold p-4">{title}</h2>
                <p className="text-xl text-slate-100 font-light p-4">{description}</p>
            </div>
            </div>
        </div>
    );
}
export default TaskPage;