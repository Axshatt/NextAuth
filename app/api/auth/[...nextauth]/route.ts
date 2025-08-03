import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";




const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Login with email",

            credentials: {
                username: { label: "Username", type: "text", placeholder: "Akshat@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const username = credentials?.username;
                const password = credentials?.password;
                const user = { id: "1", name: username, email: password }

                if (user) {

                    console.log(user);

                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),

        GoogleProvider({
            clientId: "asda",
            clientSecret:"asda"
        }),
    ]

});

export { handler as GET, handler as POST }