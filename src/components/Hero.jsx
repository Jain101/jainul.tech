import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {/* <div className="flex justify-center">
                        <Image src="/ash.jpeg" alt="Ash" width={1920} height={1080} className='m-auto p-1 w-32 h-32 object-cover rounded-full' />
                    </div> */}
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/ash2.gif" />
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold">Hi 🙋‍♂️, I am Jainul</h1>
                    <div className="py-6">
                        <p className='text-center'>An aspiring Software Developer navigating the software horizon by building some cool stuffs. For me building stuff is like training my pokemons(skills).</p>
                        <p className='text-center'>I am just trying to make my journey as adventurous as that of Ash. Doesn't it sound cool?</p>
                    </div>
                    <Link className="btn btn-primary" href={"https://drive.google.com/file/d/1wQ-1VllpkPG0VrrVikI8advDyVmh1yFI/view?usp=drive_link"}>Resume</Link>
                </div>
            </div>
        </div>
    )
}