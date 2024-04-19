import { getSortedUpdatesData } from "@/lib/updates"
import Search from "@/components/Search"
import Image from 'next/image'
import UpdatesTimeline from '@/components/UpdatesTimeline'

export default function Changelog() {
    const updates = getSortedUpdatesData()
    //const update = updates[0] // Assuming you want to access the first update object
    return (
        <div className="flex flex-col justify-center items-center">
            <Search />
            <UpdatesTimeline updates={updates}/>
        </div>
    )
}