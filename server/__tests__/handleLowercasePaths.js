import express from 'express';
import request from 'supertest';
import handleLowercasePaths from '../handleLowercasePaths';

const app = express();

app.use(handleLowercasePaths);
app.get('/documents', (req, res) => res.status(200).end());

describe('handleLowercasePaths', () => {
  it('Should lowercase path', (done) => {
    request(app)
      .get('/DOCUMENTS')
      .redirects(1)
      .expect(200)
      .then(() => done())
      .catch((error) => done(error));
  });
});
