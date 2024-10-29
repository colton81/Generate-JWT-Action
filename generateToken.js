const core = require('@actions/core');
const jwt = require('jsonwebtoken');

function createExp(days) {
  return Math.floor(Date.now() / 1000) + days * 24 * 60 * 60;
}

try {
  const issuerId = core.getInput('issuer_id');
  const privateKey = core.getInput('private_key');
  const keyId = core.getInput('key_id');
  const scope = core.getInput('connect_scope');

  const payload = {
    iss: issuerId,
    exp: createExp(30), // Token expiration (30 days)
    aud: 'appstoreconnect-v1',
    scope: scope,
  };

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
