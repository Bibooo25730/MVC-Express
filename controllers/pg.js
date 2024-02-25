const { Pool } = require('pg');

// 创建连接池
const pool = new Pool({
  user: 'bibooo',
  host: 'localhost',
  database: 'filedata',
  password: '112483051', // 替换为实际的密码
  port: 5432,
});

// 导出中间件
module.exports = (req, res, next) => {
  // 测试数据库连接
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('数据库连接失败:', err);
      res.status(500).send('数据库连接失败');
    } else {
      console.log('数据库连接成功!!!，当前时为:', result.rows[0].now);
      next(); // 调用 next() 继续处理下一个中间件或路由
    }
  });
};
