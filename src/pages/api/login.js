import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function login(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      await connectToDatabase();

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email }, // Payload data
        process.env.JWT_SECRET, // Secret key
        { expiresIn: '1h' } // Token expiration
      );

      // Set the JWT as a cookie (HTTP-only)
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600`);

      // Return success response
      res.status(200).json({ message: 'Login successful', userId: user._id });
      
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
