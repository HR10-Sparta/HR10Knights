var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');


// curl -H "Content-Type: application/json" -X POST -d '{"username":"testuser", "password":"testpass", "teamname":"my team"}' http://localhost:3000/api/users/destroy
router.post('/destroy', userController.destroyUser);

router.get('/', userController.allUsers);


module.exports = router;
