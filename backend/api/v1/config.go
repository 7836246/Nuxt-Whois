package v1

// WhoisApiInterface is the interface for WhoisApi
type WhoisApiInterface struct {
	Label    string `json:"label"`
	Name     string `json:"name"`
	Order    int    `json:"order"`
	Show     bool   `json:"show"`
	Disabled bool   `json:"disabled"`
}

// DNSApiInterface is the interface for DNSApi
type DNSApiInterface struct {
	Label    string `json:"label"`
	Name     string `json:"name"`
	Order    int    `json:"order"`
	Show     bool   `json:"show"`
	Disabled bool   `json:"disabled"`
	IName    string `json:"iName"`
	Flag     string `json:"flag"`
}

type FileConfig struct {
	Config string `json:"config" binding:"required"`
}
