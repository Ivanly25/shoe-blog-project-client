curl "http://localhost:4741/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  --data '{
  "passwords": {
    "old": "'"${password}"'",
    "new": "'"${new password}"'"
    }
  }'
echo
