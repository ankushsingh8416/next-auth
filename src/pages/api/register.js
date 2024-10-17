import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User';
import bcrypt from 'bcrypt';

export default async function register(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      // Connect to the database
      await connectToDatabase();

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already in use' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await user.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
