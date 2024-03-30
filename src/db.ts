// Generated with CLI
import { getXataClient } from "./xata";
const xata = getXataClient();

export default async function getAllBlogs() {
    const records = await xata.db.blogs
        .select(["description", "content", "title", "slug"])
        .getAll();
    console.log(records);
}
