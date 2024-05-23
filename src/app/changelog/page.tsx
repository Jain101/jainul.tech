import { getSortedUpdatesData } from "@/lib/updates"
import Search from "@/components/Search"
import UpdatesTimeline from '@/components/UpdatesTimeline'

export default function Changelog() {
    const updates = getSortedUpdatesData()
    return (
        <div className="flex flex-col justify-center items-center">
            <Search />
            <UpdatesTimeline updates={updates}/>
        </div>
    )
}