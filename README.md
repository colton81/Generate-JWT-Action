# Generate-JWT-Action

This action generates a JWT Token to be used with Apple Connect API.

## Inputs

### `issuer_id`

**Required** Your issuer ID from the API Keys page in App Store Connect.

### `connect_scope`

**Required** The endpoint you are wanting to use if it is a `GET` otherwise do not pass this parameter in. `example` "GET /v1/apps/123"

## Outputs

### `jwt_token`

The generated JWT token.

## Example usage

```yaml
uses: colton81/generate-jwt-action@v1
with:
  issuer_id: ${{ secrets.ISSUER_ID }}
  private_key: ${{ secrets.PRIVATE_KEY }}
  key_id: ${{ secrets.KEY_ID }}
  connect_scope: ${{ secrets.CONNECT_SCOPE }}
```
act --container-architecture linux/amd64 -W ./test.yml