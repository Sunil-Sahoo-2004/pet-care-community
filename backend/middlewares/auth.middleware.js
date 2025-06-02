import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
    try {
        let token = req.cookies.token

        if (!token) {
          return res.status(401).json({ message: "Authorization header missing or malformed" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
}

export default authMiddleware