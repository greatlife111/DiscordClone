'use client'
import {auth} from "@/app/firebase/config";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import Button from "@/app/components/Button";
import {useRouter} from "next/navigation";

export default function Home() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const router = useRouter();
    const signIn = async () => {
        await signInWithGoogle();
        if (!error) {
            router.push("/");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className=" flex flex-col w-80 p-12 rounded shadow-md bg-drawer items-center">
                <h2 className="mb-4 text-4xl font-bold text-center flex justify-center items-center">Fiscord</h2>
                <Button text="Log in with Google" onClick={signIn} loading={loading} />
                {error && <p className="text-sm text-warning">Sign in failed, please try again</p>}
            </div>
        </div>
    )
}