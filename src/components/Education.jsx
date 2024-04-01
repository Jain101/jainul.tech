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
                    {/* <li>
                        <div className="timeline-start">2021-2025</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box">Pursuing Bachelors in Information Technology from MITS, Gwalior(M.P.), India</div>
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-start">2020</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box">Passed 12th from State board, Sheiling Public School, Chhatarpur(M.P.), India</div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-start">2018</div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box">Passed 10th from ICSE board, Christian English College, Chhatarpur(M.P.), India</div>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}