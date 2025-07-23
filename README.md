# 🚨 SPFx Alert Banner Extension

A lightweight SharePoint Framework (SPFx) Application Customizer that injects customizable alert banners into modern SharePoint pages. Perfect for delivering time-sensitive messages, migration notices, or compliance updates to users across targeted sites.

<img width="1197" height="295" alt="image" src="https://github.com/user-attachments/assets/9fdd8f1c-7646-4dd0-9ad7-d82d8d6b850a" />
---

## ✨ Features

- 🔔 Displays a banner at the top of modern SharePoint pages
- 🎨 Fully customizable (message, background color, font, size, padding)
- 📄 Supports multiline or rich HTML content
- 🏷️ Enables targeted deployment via PnP `CustomAction`
- 🧩 Deployable tenant-wide through App Catalog

---

## 📦 How to Use

### 1. Clone and Install

git clone https://github.com/bizc8/spfx-alert-banner.git
cd spfx-alert-banner
npm install

### 2. Build & Package

gulp bundle --ship
gulp package-solution --ship

### 3. Deploy to a Site

$json = @'
{
  "message": "Add your important tenant news here",
  "backgroundColor": "#fff3cd",
  "textColor": "#212529",
  "fontSize": "12px",
  "padding": "5px",
  "fontFamily": "'Aptos', 'Segoe UI', sans-serif"
}
'@

Add-PnPCustomAction `
  -Name "AlertBanner" `
  -Title "AlertBanner" `
  -Location "ClientSideExtension.ApplicationCustomizer" `
  -ClientSideComponentId "668a72ef-e0d9-4354-9a82-d68682c3f77c" `
  -Scope "Web" `
  -ClientSideComponentProperties $json

Replace "YOUR-COMPONENT-ID" with the GUID from your manifest.json.


### 4.To Remove Banner

Remove-PnPCustomAction -Name "AlertBanner" -Scope Web

🧠 Tech Stack
SPFx (v1.18+)

React (optional – this project uses vanilla JS)

PnP PowerShell

Modern SharePoint
