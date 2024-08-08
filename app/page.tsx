'use client'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/app/firebase/config";
import Button from "@/app/components/Button";
import {signOut} from "firebase/auth";


export default function Home() {
    const [user,loading] = useAuthState(auth);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello user {user?.displayName}
        <Button text="Log out with Google" onClick={() => signOut(auth)} />
    </main>
  );
}
