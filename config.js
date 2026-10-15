/* 马牌抽奖 · 运行配置（GitHub Pages 版）
 * LOTTERY_API   : 国内中转服务器地址（云函数），非空则所有数据库调用走中转；
 *                 留空则用 WorkBuddy 云 SDK 直连（仅限部署在 workbuddy 域名时可用）
 * LOTTERY_LINK_BASE : 分享链接前缀，留空则按当前页面地址自动推导
 */
window.LOTTERY_API = ''; // 部署中转后填入，如 https://xxx.ap-shanghai.app.tcloudbase.com/rpc
window.LOTTERY_LINK_BASE = '';
