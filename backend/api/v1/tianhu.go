package v1

import "time"

// TianHuWhoisResponse represents the top-level structure of the WHOIS response.
type TianHuWhoisResponse struct {
	Code    string          `json:"code"`
	Message string          `json:"message"`
	Data    TianHuWhoisData `json:"data"`
}

// TianHuWhoisData represents the detailed data part of the WHOIS response.
type TianHuWhoisData struct {
	URL       string               `json:"url"`
	Result    string               `json:"result"`
	Status    int                  `json:"status"`
	Formatted TianHuFormattedWhois `json:"formatted"`
	TLD       string               `json:"tld"`
	Timezone  TianHuWhoisTimezone  `json:"timezone"`
}

// TianHuFormattedWhois represents the formatted WHOIS data.
type TianHuFormattedWhois struct {
	Key            string                   `json:"key"`
	Domain         TianHuDomainInfo         `json:"domain"`
	Registrar      TianHuRegistrarInfo      `json:"registrar"`
	Registrant     TianHuRegistrantInfo     `json:"registrant"`
	Administrative TianHuAdministrativeInfo `json:"administrative"`
	Technical      TianHuTechnicalInfo      `json:"technical"`
	Billing        TianHuBillingInfo        `json:"billing"`
}

// TianHuDomainInfo contains information about the domain.
type TianHuDomainInfo struct {
	NameServers []string  `json:"name_servers"`
	Status      []string  `json:"status"`
	Domain      string    `json:"domain"`
	ID          string    `json:"id"`
	WhoisServer string    `json:"whois_server"`
	UpdatedDate time.Time `json:"updated_date"`
	CreatedDate time.Time `json:"created_date"`
	ExpiredDate time.Time `json:"expired_date"`
	DNSSEC      bool      `json:"dnssec"`
}

// TianHuRegistrarInfo contains information about the registrar.
type TianHuRegistrarInfo struct {
	Key             string `json:"key"`
	ReferralURL     string `json:"referral_url"`
	RegistrarName   string `json:"registrar_name"`
	RegistrarIANAID string `json:"registrar_ianaid"`
	RegistrarEmail  string `json:"registrar_email"`
	RegistrarPhone  string `json:"registrar_phone"`
}

// TianHuRegistrantInfo, TianHuAdministrativeInfo, TianHuTechnicalInfo, and TianHuBillingInfo
// can be defined similarly, depending on the details you wish to include.
type TianHuRegistrantInfo struct {
	Key string `json:"key"`
	// Additional fields can be added here.
}

type TianHuAdministrativeInfo struct {
	Key string `json:"key"`
	// Additional fields can be added here.
}

type TianHuTechnicalInfo struct {
	Key string `json:"key"`
	// Additional fields can be added here.
}

type TianHuBillingInfo struct {
	Key string `json:"key"`
	// Additional fields can be added here.
}

// TianHuWhoisTimezone represents the timezone information of the WHOIS data.
type TianHuWhoisTimezone struct {
	UTCOffset int       `json:"utcoffset"`
	Demo      time.Time `json:"demo"`
}
