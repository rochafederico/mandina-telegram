export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  telegram: {
    token: process.env.API_TELEGRAM_TOKEN
  }
});