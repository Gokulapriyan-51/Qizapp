import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_random_secret_key';

// Extend Request to include user object
interface AuthRequest extends Request {
  user?: { userId: number; role: string };
}

// Middleware to authenticate using JWT
export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & { userId: number; role: string };
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Middleware to authorize teachers only
export const authorizeTeacher = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'teacher') {
    return res.status(403).json({ message: 'Access denied. Teacher role required.' });
  }
  next();
};
