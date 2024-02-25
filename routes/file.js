const express = require('express');
var router =express.Router();
const fs = require('fs');


// 定义文件查询接口
router.get('/', (req, res) => {
  const directoryPath = '/home/bibooo/公共的/express_mvc/uploads'; // 替换为实际的文件路径
 
  // 读取文件系统信息
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // 返回文件列表
      res.json({ files });
    }
  });

});

module.exports = router