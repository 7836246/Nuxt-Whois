package server

import (
	"github.com/gin-gonic/gin"
	"whois-go/internal/handler"
	"whois-go/internal/middleware"
	"whois-go/pkg/helper/resp"
	"whois-go/pkg/log"
)

func NewServerHTTP(
	logger *log.Logger,
	systemHandler handler.SystemHandler,
) *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	r.Use(
		middleware.CORSMiddleware(),
	)
	r.GET("/", func(ctx *gin.Context) {
		resp.HandleSuccess(ctx, map[string]interface{}{
			"say": "This is GoLang!",
		})
	})

	// 获取配置文件内容
	api := r.Group("/api")
	api.POST("/getWebSiteConfig", systemHandler.GetWebSiteConfig)

	api.POST("/getWhoisServer", systemHandler.GetWhoisServer)

	server := api.Group("/server")
	server.POST("/getWhois", systemHandler.GetWhois)
	server.POST("/getDns", systemHandler.GetWhois)

	return r
}
