"use client"

import Link from 'next/link' 
import {signIn, useSession, signOut} from 'next-auth/react'
function Navbar() {


    const {data: session} = useSession()
    return (
        <nav>
            <Link href="/">
                <h1>
                    granhito
                </h1>
            </Link>

            {session?.user 
                ?(            
                <div>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                    <p>{session.user.name} {session.user.email}</p>
                    <img src={session.user.image} alt=""></img>
                    <button 
                        onClick={async () => {
                            await signOut({
                                callbackUrl: "/"
                            })
                        }}>Logout</button>
                </div>
                ) 
                :(
                <div>
                    <button onClick={() => signIn()}>
                        Sign In
                    </button>
                </div>
                )
            }

        </nav>
    )
}
export default Navbar;