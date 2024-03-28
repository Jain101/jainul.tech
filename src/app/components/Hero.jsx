import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="flex justify-center">
                        <Image src="/ash.jpeg" alt="Ash" width={150} height={120} />
                    </div>
                    <h1 className="text-5xl font-bold">Hi 🙋‍♂️, I am Jainul</h1>
                    <div className="py-6"><p>An aspiring Software Developer navigating the software horizon by building some cool stuffs.</p>
                        <p>For me building stuff is like training my acquired pokemons(skills).</p>
                    </div>
                    <Link className="btn btn-primary" href={"https://drive.google.com/file/d/1wQ-1VllpkPG0VrrVikI8advDyVmh1yFI/view?usp=drive_link"}>Resume</Link>
                </div>
            </div>
        </div>
    )
}