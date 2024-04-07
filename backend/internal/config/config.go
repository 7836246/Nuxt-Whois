package config

type Server struct {
	SiteConfig SiteConfig  `mapstructure:"siteConfig" json:"siteConfig" yaml:"siteConfig"`
	Login      LoginConfig `mapstructure:"login" json:"login" yaml:"login"`
}
