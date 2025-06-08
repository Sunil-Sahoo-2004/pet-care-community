const roleMiddleware = (requiredRole) => {
  return (req, res, next) => {
    try {
      if (!req.user || req.user.role !== requiredRole) {
        return res.status(403).json({ success: false, message: `Access denied. Only ${requiredRole}s are allowed.` });
      }

      next(); 
    } catch (error) {
      console.error("Role middleware error:", error);
      res.status(500).json({ success: false, message: "Internal server error in role middleware" });
    }
  };
};

export default roleMiddleware