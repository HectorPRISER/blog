import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'your email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {

                //  Check to see if email and password are valid
                if (!credentials.email || !credentials.password) {
                    return null
                }

                // check to see if user exists
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user) {
                    return null
                }

                // check to see if passwords match
                const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

                if (!passwordsMatch) {
                    return null;
                }

                // return user object
                return user;
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    callbacks : {
        async jwt({token,user})
        {
            console.log("jwt callback",{token,user})
            if(user)
            {
                return {
                    ...token,
                    id:user.id
                }
            }
            return token
        },

        async session({token,session}) {
            console.log("session callback",{token,session})
            return {
                ...session,
                user:{
                    ...session,
                    id:token.id
                }
            }
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

