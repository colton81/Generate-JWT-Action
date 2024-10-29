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
uses: actions/generate-jwt-token@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  issuer_id: ${{ secrets.ISSUER_ID }}
  private_key: ${{ secrets.PRIVATE_KEY }}
  key_id: ${{ secrets.KEY_ID }}
  connect_scope: ${{ secrets.CONNECT_SCOPE }}
```
