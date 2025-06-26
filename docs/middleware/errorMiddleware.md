| Prisma error class                | Typical cause                      | HTTP code                   | Example response body                                                                    |
| --------------------------------- | ---------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| `P2002` KnownRequestError         | unique constraint                  | `409 Conflict`              | `{ error: \"Conflict\", message: \"The value for 'email' is already taken.\" }`          |
| `P2025` KnownRequestError         | record not found                   | `404 Not Found`             | `{ error: \"Not Found\", message: \"No Organizer found\" }`                              |
| `P2003` KnownRequestError         | FK constraint                      | `400 Bad Request`           | `{ error: \"Invalid reference\", message: \"Foreign-key constraint failed.\" }`          |
| `PrismaClientValidationError`     | invalid query data                 | `400 Bad Request`           | `{ error: \"Validation error\", message: \"Argument email for data.email is missing\" }` |
| `PrismaClientInitializationError` | bad connection string, missing env | `500 Internal Server Error` | …                                                                                        |
| `PrismaClientUnknownRequestError` | rare, unknown                      | `500`                       | …                                                                                        |
| `PrismaClientRustPanicError`      | engine panic                       | `500`                       | …                                                                                        |
