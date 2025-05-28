#   Vortex-panel

**Vortex-panel** is an open-source, modern game server and application management panel built with **Node.js, Docker, and Express**. It is designed to work seamlessly with the **Vortex-deamon** backend.  

![GitHub](https://img.shields.io/badge/license-MIT-blue) ![Node.js](https://img.shields.io/badge/Node.js-v20%2B-green) ![Status](https://img.shields.io/badge/status-active-brightgreen)  

## Features  
- **Game Server Management** - Easily deploy and control game servers  
- **Docker Integration** - Containerized applications for better isolation  
- **User-Friendly UI** - Intuitive dashboard for server administration  
- **Multi-OS Support** - Works on Linux, Windows (limited), and macOS  

## Installation  

### 1. Choose Your Operating System  

| OS         | Version  | Supported | Notes                         |
|------------|----------|-----------|-------------------------------|
| Ubuntu     | 24.04    | ✅ Yes    | Recommended                   |
|            | 22.04    | ✅ Yes    |                               |
| Debian     | 11, 12   | ✅ Yes    | Stable and well-tested        |
| CentOS     | 7, 8     | ⚠️ Partial | CentOS 8 is EOL              |
| Windows    | 10, 11   | ⚠️ Partial | Needs firewall adjustments   |
| macOS      | 10.15+   | ⚠️ Partial | Not for production use       |

### 2. Install Dependencies  

* Node.js `v20` and higher (Nodejs `v20` recommended).
* ### Installation Nodejs 20

```bash
curl -sL https://deb.nodesource.com/setup_20.x | sudo bash -
```
```bash
apt-get install nodejs -y
```

### Installation Panel

To install and start the Vortex Panel , run the following commands:

```bash
git clone https://github.com/spookyMC123/Vortex-panel.git && cd Vortex-panel && npm install && npm run seed && npm run createUser && node .
```

## Credits  
- **Developed by**: NX!GHT
- **made by**: NX!GHT   
- **Powered by**: InfinityForge  
- **Special Thanks**: Joy
