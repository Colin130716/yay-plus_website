# 配置

## 配置文件位置

配置文件位于 `~/.yay-plus/yay-plus.conf`。

## 基本配置

```conf
# Yay+ 配置文件
# 此文件用于设置 Yay+ 的默认行为

# GitHub代理设置 (空:每次询问, 1-5:使用对应代理, 或直接填自定义代理URL)
# 1: https://github.akams.cn/
# 2: https://gh-proxy.com/
# 3: https://gh.dpik.top/
# 4: https://gh.llkk.cc/
# 5: 不使用GitHub代理 (不推荐)
# 自定义代理示例: github_proxy=https://gh.xxx.com/
github_proxy=1

# NPM代理设置 (true:启用默认镜像, false:不启用, 或直接填自定义registry URL)
# 启用后会使用 https://registry.npmmirror.com 作为NPM镜像源
# 自定义镜像示例: npm_proxy=https://registry.xxx.com
npm_proxy=true

# AUR源选择 (aur:使用AUR官方, github:使用GitHub镜像)
aur_source=aur

# kernel.org代理设置 (true:启用默认镜像, false:不启用, 或直接填自定义镜像URL)
# 自定义镜像示例: kernel_org_proxy=https://mirrors.nju.edu.cn/kernel.org/
kernel_org_proxy=true

# 调试模式 (true:启用调试模式, false:不启用调试模式)
debug_mode=false

# AUR缓存有效期（分钟，默认30；设为0则每次检查都刷新）
aur_cache_ttl=30

# 自更新通道 (release: 稳定版, beta: 测试版, dev: 开发版)
self_update_channel=beta

# AUR RPC 请求重试次数（0=不重试，默认3次重试）
aur_retry=3

# 语言设置（空:自动检测, zh:简体中文, zh_TW:繁体中文, en:英文）
lang=

# 配置文件版本
config_version=9
```

## 配置说明

| 配置项 | 说明 |
|--------|------|
| `github_proxy` | GitHub 代理设置：1-5 内置代理编号，或直接填写自定义 http(s) URL |
| `npm_proxy` | npm 镜像开关，或直接填写自定义 registry URL |
| `aur_source` | AUR 包下载源 |
| `kernel_org_proxy` | kernel.org 镜像开关，或直接填写自定义镜像 URL |
| `debug_mode` | 调试模式开关 |
| `aur_cache_ttl` | AUR 缓存有效期（分钟） |
| `self_update_channel` | 自更新通道（release/beta/dev） |
| `aur_retry` | AUR RPC 请求重试次数 |
| `lang` | 语言设置（zh/zh_TW/en） |
| `config_version` | 配置文件版本 |

> [!NOTE]
> 配置文件中的值若不符合规则（如代理编号超出 1-5、URL 格式错误），将被跳过并使用默认值。

## 下一步

配置完成后，开始 [使用](./usage) Yay+。