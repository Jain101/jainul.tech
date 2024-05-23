import EduTimeline from './EduTimeline'

const academics = [
    {
        id: 1,
        year: "2021-2025",
        title: "Pursuing Bachelors in Information Technology from MITS, Gwalior(M.P.), India"
    },
    {
        id: 2,
        year: "2020",
        title: "Passed 12th from State board, Sheiling Public School, Chhatarpur(M.P.), India"
    },
    {
        id: 3,
        year: "2018",
        title: "Passed 10th from ICSE board, Christian English College, Chhatarpur(M.P.), India"
    },
]

export default function Education() {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-4 p-4">My Education</h1>
            <div className="flex flex-col items-start justify-start">
                <ul className="timeline timeline-vertical ">
                    {academics.map((academic) => <EduTimeline key={academic.id} academic={academic} />)}
                </ul>
            </div>
        </div>
    );
}