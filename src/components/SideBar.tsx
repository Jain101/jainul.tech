import Image from "next/image";
import Link from "next/link";

// const navItems = {
//     '/': {
//         name: 'Home',
//     },
//     '/blog': {
//         name: 'Blog',
//     },
//     '/projects': {
//         name: 'Projects',
//     },
//     '/changelog': {
//         name: 'Changelog',
//     },
// };

const navItems = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/blog',
        name: 'Blog',
    },
    {
        id: 3,
        path: '/projects',
        name: 'Projects',
    },
    {
        id: 4,
        path: '/changelog',
        name: 'Changelog',
    },
];

export default function SideBar() {
    return (
        <>
            <div className="fixed top-0 left-0 flex flex-col">
                <div className="mx-4 my-4 w-24">
                    <Image src="/pikachu.gif" alt="Logo" width={1920} height={1080} className="w-32 h-24 rounded-full" />
                </div>
                <ul className="flex flex-col mx-4 my-6 space-x-0 space-y-2 w-20">
                    {navItems.map((navItem) => {
                        return (
                            <li key={navItem.id} className="text-white w-20 btn hover:btn-neutral">
                                {/* <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></span> */}
                                <span><Link href={navItem.path}>{navItem.name}</Link></span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* <ul className="menu bg-base-200 rounded-box">
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </a>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </a>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </a>
                </li>
            </ul> */}
        </>
    )
}