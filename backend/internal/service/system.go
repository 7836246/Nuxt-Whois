package service

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	v1 "whois-go/api/v1"
	"whois-go/internal/config"
	"whois-go/internal/global"
	"whois-go/internal/utils"
	"whois-go/pkg/log"
)

type SystemService interface {
	GetSystemConfig() (config.SiteConfig, error)
	GetWhoisJson(fileConfig string) ([]v1.WhoisApiInterface, error)
	WhoisServerIsWhocx(domain string) string
	WhoisServerIsTianhu(domain string) (v1.TianHuWhoisResponse, error)
}

func NewSystemService(service *Service, logger *log.Logger) SystemService {
	return &systemService{
		Service: service,
		logger:  logger,
	}
}

type systemService struct {
	*Service
	logger *log.Logger
}

// GetSystemConfig 读取配置文件
func (s *systemService) GetSystemConfig() (config.SiteConfig, error) {
	return global.G_CONFIG.SiteConfig, nil
}

func (s *systemService) GetWhoisJson(fileConfig string) ([]v1.WhoisApiInterface, error) {
	file, err := os.Open(fmt.Sprintf("config/json/%s.json", fileConfig))
	if err != nil {
		s.logger.Fatal(fmt.Sprintf("Error opening file: %s", err))
	}
	defer file.Close()

	// 读取文件内容
	bytes, err := ioutil.ReadAll(file)

	// 反序列化JSON到结构体切片
	var apis []v1.WhoisApiInterface
	if err = json.Unmarshal(bytes, &apis); err != nil {
		s.logger.Fatal(fmt.Sprintf("Error unmarshalling JSON: %s", err))
	}

	return apis, err
}

func (s *systemService) WhoisServerIsWhocx(domain string) string {
	whocxURL := global.G_CONFIG.SiteConfig.WhoisServerApi["whocx"]
	params := url.Values{}
	params.Set("domain", domain)
	params.Set("whois", "Domain Name: ")
	params.Set("lang", "zh")
	params.Set("time_zone", "8")
	request, err := utils.SendPostRequest(whocxURL, params)
	if err != nil {
		return ""
	}
	return request
}

func (s *systemService) WhoisServerIsTianhu(domain string) (v1.TianHuWhoisResponse, error) {
	tianhuURL := global.G_CONFIG.SiteConfig.WhoisServerApi["tianhu"]
	params := url.Values{}
	//domain=baidu.com&action=searchWhois
	params.Set("domain", domain)
	params.Set("action", "searchWhois")
	var tianhuResp v1.TianHuWhoisResponse
	// Append query parameters to the URL
	fullURL := tianhuURL + "?" + params.Encode()
	// Perform the GET request
	response, err := http.Get(fullURL)

	defer response.Body.Close()

	// Read the response body
	body, err := ioutil.ReadAll(response.Body)

	err = json.Unmarshal(body, &tianhuResp)

	return tianhuResp, err
}
