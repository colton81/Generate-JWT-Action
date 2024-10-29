const core = require('@actions/core');
const jwt = require('jsonwebtoken');

function createExp(mins) {
  // convert milliseconds to seconds for the current time in seconds
  const currentTime = Math.floor(Date.now() / 1000);
  const minute = 60;
  return currentTime + minute * mins;
}

try {
  const issuerId = core.getInput('issuer_id', { required: true });
  const privateKey = core.getInput('private_key').replace(/\\n/g, '\n');
  const keyId = core.getInput('key_id', { required: true });
  const scope = core.getInput('connect_scope', { required: false });

  const payload = {
    iss: issuerId,
    iat: Math.floor(Date.now() / 1000),
    exp: createExp(5),
    aud: 'appstoreconnect-v1'
  };

  if (scope !== '' && scope !== undefined && scope !== null) {
    payload.scope = `GET ${scope}`
  }

  const token = jwt.sign(payload, privateKey, {
    algorithm: 'ES256',
    header: {
      alg: 'ES256',
      kid: keyId,
      typ: 'JWT',
    },
  });

  core.setOutput('jwt_token', token);
} catch (error) {
  core.setFailed(`Token generation failed: ${error.message}`);
}
