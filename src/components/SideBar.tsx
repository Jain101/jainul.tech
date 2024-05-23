import Image from "next/image";
import Link from "next/link";

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
                                <span><Link href={navItem.path}>{navItem.name}</Link></span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}