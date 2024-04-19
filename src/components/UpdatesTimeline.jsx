export default function UpdatesTimeline({ updates }) {
    return (
        <div className="w-full max-w-5xl ml-32 mt-16">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {updates.map((update) =>
                    <li key={update.id}>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">{update.date}</time>
                            <h1>Project: {update.project}</h1>
                            <p>version: {update.version}</p>
                        </div>
                        <div className="timeline-end mb-10">
                            <img src={update.img} alt={update.title} width={150} height={150} />
                            <h1 className="text-lg font-black">{update.title}</h1>
                            <p>{update.summary}</p>
                        </div>
                        <hr />
                    </li>
                )}
            </ul>
        </div>
    )
}