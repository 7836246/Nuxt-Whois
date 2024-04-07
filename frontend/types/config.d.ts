// 定义表示单个选项的接口
interface SelectOption {
    label: string;
    value: string;
}

// 定义表示整个 JSON 对象的接口
interface WebSiteConfig {
    logoLeftText: string;
    logoRightText: string;
    defaultSelectOptions: SelectOption[];
}
