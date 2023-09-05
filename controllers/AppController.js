import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  static getStatus(req, res) {
    const status = {
      redis: RedisClient.isAlive(),
      db: DBClient.isAlive(),
    };
    return res.status(200).send(status);
  }

   static async getStats(req, res) {
     const stats = {
      users: await DBClient.nbUsers(),
      files: await DBClient.nbFiles(),
     };
    return res.status(200).send(stats);
  }
}

module.exports = AppController;
