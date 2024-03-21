const isAdmin = (req, res, next) => {
    if (req.rol == 'ADMIN') {
      next();
    } else {
      res.status(403).json({
        msg: 'Unauthorized rol',
      });
    }
  };
  
  export { isAdmin };