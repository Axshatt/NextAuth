
import { SessionProvider, signIn, useSession,signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
// export default function Home() {
//   return <SessionProvider>
//     <RealHome />
//   </SessionProvider>
// }



// function RealHome() {

//   const session = useSession();
//   return (
//     <div>
//       {session.status === "authenticated" && <button onClick={() => 
//          signOut() 
//       }>Logout</button>}

//       {session.status === "unauthenticated" && <button onClick={() => 
//          signIn()
//       }>Signin</button>}


//     </div>
//   );
// }

export default async function Home(){
  const session = await getServerSession();
  
  return(
    <div>
      {JSON.stringify(session)}
      </div>
  )
}