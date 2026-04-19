# 配置

## 配置文件位置

配置文件位于 `~/.yay-plus/yay-plus.conf`。

## 基本配置

```conf
# Yay+ 配置文件
# 此文件用于设置 Yay+ 的默认行为

# GitHub代理设置 (空:每次询问, 1-5:使用对应代理)
# 1: https://github.akams.cn/ (推荐，采用Geo-IP 302重定向其他高速及镜像站)
# 2: https://gh-proxy.com/ (推荐，下载速度快)
# 3: https://ghfile.geekertao.top/ (推荐，速度快)
# 4: https://gh.llkk.cc/ (速度较快)
# 5: 不使用GitHub代理 (不推荐)
github_proxy=3

# Go代理设置 (true:启用代理, false:不启用代理)
# 启用后会使用 https://goproxy.cn 作为Go模块代理
go_proxy=true

# NPM代理设置 (true:启用代理, false:不启用代理)
# 启用后会使用 https://registry.npmmirror.com 作为NPM镜像源
npm_proxy=true

# AUR源选择 (aur:使用AUR官方, github:使用GitHub镜像)
aur_source=aur

# kernel.org代理设置 (true:启动代理, false:不启用代理)
kernel_org_proxy=true

# 调试模式 (true:启用调试模式, false:不启用调试模式)
debug_mode=true

# 配置文件版本
config_version=4
```

## 配置说明

| 配置项 | 说明 |
|--------|------|
| `github_proxy` | Github 代理地址设置 |
| `go_proxy` | Golang 临时代理设置 |
| `npm_proxy` | 软件包 npm install 代理开关 |
| `aur_source` | AUR 包下载源 |
| `kernel_org_proxy` | kernel.org 代理开关 |
| `debug_mode` | 调试模式开关 |
| `config_version` | 配置文件版本 |

## 下一步

配置完成后，开始 [使用](./usage) Yay+。