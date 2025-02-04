import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const token = req.query.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, login again' });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.status(401).json({ success: false, message: 'Not authorized, login again' });
    }

    next();

  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export default userAuth;
