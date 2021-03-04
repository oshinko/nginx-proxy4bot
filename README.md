# Nginx proxy for bot

```sh
docker-compose up -d
curl -H "User-Agent: human" http://localhost
curl -H "User-Agent: bot" http://localhost
```
