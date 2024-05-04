import Image from "next/image"

function Skills() {
    return (
        <>
            <h1 className="text-center font-bold text-3xl my-4 p-2">Skills</h1>
            <div className="flex flex-row gap-6 flex-wrap justify-center">
                <Image src="/react.png" alt='React' width={150} height={150} />
                <div class="grid grid-cols-4 gap-4">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
                    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
                        <a href="https://linear.app">
                            <svg width="78" height="20" role="img" aria-label="Linear logo">
                                <use href="/sprite.svg#linear" />
                            </svg>
                        </a>
                    </div>
                    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
                        <a href="https://supabase.com">
                            <svg width="100" height="19" role="img" aria-label="Supabase logo">
                                <use href="/sprite.svg#supabase" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills