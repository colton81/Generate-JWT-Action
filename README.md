# Generate-JWT-Action

This action generates a JWT Token to be used with Apple Connect API.

## Inputs

### `issuer_id`

**Required** Your issuer ID from the API Keys page in App Store Connect.

### `private_key`

**Required** Your app store connect API key.

### `key_id`

**Required**  Your private key ID from App Store Connect.

### `connect_scope`

 The endpoint you are wanting to use if it is a `GET` otherwise do not pass this parameter in. `example` "GET /v1/apps/123"

## Outputs

### `jwt_token`

The generated JWT token.

## Example usage

```yaml
  uses: colton81/generate-jwt-action@main
  id: jwt_token_step
  with:
    issuer_id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    private_key: "-----BEGIN PRIVATE KEY-----\xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx\n-----END PRIVATE KEY-----"
    key_id: "xxxxxxxxxx"
    connect_scope: "GET /v1/betaGroups"
```
