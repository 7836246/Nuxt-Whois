package v1

type WhoisServer struct {
	Name   string `json:"name" binding:"required"`
	Domain string `json:"domain" binding:"required"`
}

// WhocxRequestParams 请求参数结构体
type WhocxRequestParams struct {
	Domain   string `json:"domain"`              // 域名 (必选)
	Whois    string `json:"whois"`               // 域名的whois原始信息 (必选)
	Lang     string `json:"lang,omitempty"`      // 语言代码 (可选)
	TimeZone string `json:"time_zone,omitempty"` // 时区 (可选)
}
