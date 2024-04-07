# Whois Go

等待完善

## Features

- **Gin**: https://github.com/gin-gonic/gin
- **Wire**: https://github.com/google/wire
- **Viper**: https://github.com/spf13/viper
- More...

## 项目结构

```
.
├── cmd
│   └── server
│       ├── main.go
│       ├── wire.go
│       └── wire_gen.go
├── config
│   ├── local.yml
│   └── prod.yml
├── internal
│   ├── handler
│   │   ├── handler.go
│   │   └── user.go
│   ├── middleware
│   │   └── cors.go
│   ├── model
│   │   └── user.go
│   ├── repository
│   │   ├── repository.go
│   │   └── user.go
│   ├── server
│   │   └── http.go
│   └── service
│       ├── service.go
│       └── user.go
├── pkg
├── LICENSE
├── README.md
├── README_zh.md
├── go.mod
└── go.sum

```
