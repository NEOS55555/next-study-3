const express = require('express');

const router = express.Router();

const userData = [1,2,3,4,5];

// 获取用户列表
router.get('/list', (req, res) => {
  const resData = {
    data: userData
  };
  res.json(resData);
});

module.exports = router;