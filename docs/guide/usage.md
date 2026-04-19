# 使用

## 运行脚本

```bash
yay-plus <command> [options] package
```

## 常用操作

### 安装 Pacman 软件包

```bash
yay-plus -S --pacman <package>
```

### 安装 AUR 软件包

```bash
yay-plus -S <package>
```

### 安装 Flatpak 软件包

```bash
yay-plus -S --flatpak <package>
```

### 安装本地包（可自动识别包类型）

```bash
yay-plus -L /path/to/package
```

### 卸载 Pacman 软件包（包括从 AUR 安装的）

```bash
yay-plus -R --pacman <package>
```

### 卸载 Flatpak 软件包

```bash
yay-plus -R --flatpak <package>
```

### 更新所有软件包

```bash
# --all 为可选参数，-U 默认操作为更形所有软件包
yay-plus -U [--all]
```

### 查找软件包

```bash
yay-plus -Q <package>
```

---

### 更多用法请 ``yay-plus --help`` 查看。

## 相关链接

- [关于](../other/about)
- [返回快速开始](./start)