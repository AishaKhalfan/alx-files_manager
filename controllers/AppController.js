import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  /**
   * If the redis client is alive and the database
   * client is alive, return a 200 status code with a JSON
   * object that has a redis key with a value of true and a db key with a value of true
   * @param req - The request object
   * @param res - The response object
   */
  static getStatus(req, res) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    return res.status(200).send(status);
  }

  static async getStats(req, res) {
    const stats = {
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    };
    return res.status(200).send(stats);
  }
}

module.exports = AppController;
