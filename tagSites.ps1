$json = @'
{
  "message": "<strong>🚨 Migration Notice:</strong><br>This site contains content from <u>X Corporation</u> and will be migrated.<br>If you are part of <u>X Corp</u>, please stop using this site after <strong>July 30th</strong>.<br><u>YYY Corp</u> employees may ignore this message.",
  "backgroundColor": "#fff3cd",
  "textColor": "#212529",
  "fontSize": "16px",
  "padding": "12px",
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
