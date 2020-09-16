import fs from 'fs';
import util from 'util';
import path from 'path';

async function generateRobots(): Promise<void> {
  const copyFile = util.promisify(fs.copyFile);
  const isStaging = process.env.BUILD_ENVIRONMENT === 'staging';

  const src = isStaging
    ? path.join('./robots/disallow-robots.txt')
    : path.join('./robots/robots.txt');

  await copyFile(src, path.join('./public/robots.txt'));
}

generateRobots();
