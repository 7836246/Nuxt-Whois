package main

import (
	"fmt"
	"go.uber.org/zap"
	"whois-go/pkg/config"
	"whois-go/pkg/http"
	"whois-go/pkg/log"
)

func main() {
	conf := config.NewConfig()
	logger := log.NewLog(conf)

	logger.Info("server start", zap.String("host", "http://127.0.0.1:"+conf.GetString("http.port")))

	app, cleanup, err := newApp(conf, logger)
	if err != nil {
		panic(err)
	}
	defer cleanup()

	http.Run(app, fmt.Sprintf(":%d", conf.GetInt("http.port")))
}
