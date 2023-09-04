const redis = require('redis');

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (err) => console.error('Redis error:', err));
  }

  isAlive() {
    return this.client.isConnected;
  }

  async get(key) {
    const value = await this.client.get(key);
    return value;
  }

  async set(key, value, duration) {
    await this.client.setex(key, duration, value);
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;
