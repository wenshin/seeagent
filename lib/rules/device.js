module.exports = {
  // 如果要新增设备类型请按照一下格式添加规则
  // 设备类型包括：["tv", "tablet", "phone", "desktop", "bot"]
  // 规则样例：

  Meizu: {rules: [/Meizu-([a-zA-Z0-9]+)/i], info: {type: 'phone'}},
  iPhone: {rules: [/iPhone(\d+,\d+)/i], info: {type: 'phone'}},
};
