package config

type SiteConfig struct {
	LogoLeftText         string            `mapstructure:"logoLeftText" json:"logoLeftText" yaml:"logoLeftText"`                         // Logo左文字
	LogoRightText        string            `mapstructure:"logoRightText" json:"logoRightText" yaml:"logoRightText"`                      //  logo右文字
	DefaultSelectOptions []SelectOptions   `mapstructure:"defaultSelectOptions" json:"defaultSelectOptions" yaml:"defaultSelectOptions"` //  默认选择项
	WhoisServerApi       map[string]string `mapstructure:"whoisSeverApi" json:"whoisSeverApi" yaml:"whoisSeverApi"`
}

type SelectOptions struct {
	Label string `json:"label"`
	Value string `json:"value"`
}
