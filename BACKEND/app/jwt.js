const jwt = require('jsonwebtoken');
const User = require("./models/user.models.js");

const secretKey = 'mysecretkey';
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ error: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, secretKey);
      const user = await User.findOne({ _id: decoded._id });
      if (!user) {
        return res.status(401).send({ error: 'Unauthorized' });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Unauthorized' });
    }
  };
  app.get('/home-page', authMiddleware, (req, res) => {
    res.send({ message: 'This is the dashboard' });
  });
    
