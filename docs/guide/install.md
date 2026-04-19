# 安装

## 从 Releases 安装

从 [Github Releases](https://github.com/Colin130716/yay-plus/releases) 下载以 `.pkg.tar.zst` 结尾的软件包。

```bash
sudo pacman -U /path/to/yay-plus.pkg.tar.zst
```

## 从仓库安装

```bash
# 克隆仓库
git clone https://github.com/Colin130716/yay-plus.git
cd yay-plus

# 编译 PKGBUILD
makepkg -sric
```

## 验证安装

```bash
yay-plus -h
```

## 下一步

安装完成后，继续 [配置](./config) Yay+。