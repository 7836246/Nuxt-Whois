package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
	v1 "whois-go/api/v1"
	"whois-go/internal/service"
)

type SystemHandler interface {
	GetWebSiteConfig(ctx *gin.Context)
	GetWhoisServer(c *gin.Context)
	GetWhois(c *gin.Context)
}

type systemHandler struct {
	*Handler
	systemService service.SystemService
}

func NewSystemHandler(handler *Handler, systemService service.SystemService) SystemHandler {
	return &systemHandler{
		Handler:       handler,
		systemService: systemService,
	}
}

func (h *systemHandler) GetWebSiteConfig(c *gin.Context) {
	config, err := h.systemService.GetSystemConfig()
	if err != nil {
		v1.FailWithMessage("获取失败", c)
		return
	}
	v1.OkWithDetailed(config, "获取成功", c)
}

func (h *systemHandler) GetWhoisServer(c *gin.Context) {
	var fileConfig v1.FileConfig
	// 从请求体中绑定JSON数据到configs变量
	if err := c.BindJSON(&fileConfig); err != nil {
		// 如果解析出错，返回错误信息
		v1.FailWithMessage("解析失败", c)
		return
	}
	config, err := h.systemService.GetWhoisJson(fileConfig.Config)
	if err != nil {
		v1.FailWithMessage("获取失败", c)
		return
	}
	v1.OkWithDetailed(config, "获取成功", c)
}

func (h *systemHandler) GetWhois(c *gin.Context) {
	var whoisServer v1.WhoisServer
	if err := c.BindJSON(&whoisServer); err != nil {
		// 如果解析出错，返回错误信息
		v1.FailWithMessage("解析失败", c)
		return
	}
	//判断whoisServer的值来进行不同的函数
	switch whoisServer.Name {
	case "whocx":
		resp := h.systemService.WhoisServerIsWhocx(whoisServer.Domain)
		v1.OkWithDetailed(resp, "获取成功", c)
		return
	case "tianhu":
		resp, err := h.systemService.WhoisServerIsTianhu(whoisServer.Domain)
		if err != nil {
			v1.FailWithMessage("获取失败", c)
			return
		}
		c.JSON(http.StatusOK, resp)
		return
	default:
		v1.FailWithMessage("未知的Whois服务器", c)
		return
	}
}
