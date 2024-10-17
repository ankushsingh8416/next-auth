import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectToDatabase from '../../../lib/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcrypt';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectToDatabase();

        const user = await User.findOne({ email: credentials.email });

        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { email: user.email, name: user.name };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login', 
  },
});
