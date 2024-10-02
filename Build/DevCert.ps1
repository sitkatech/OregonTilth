Param(
  [Parameter (Mandatory = $false)]
  [string] $iniFile = "$PSScriptRoot\build.ini"
)

Import-Module "$PSScriptRoot\Get-Config.psm1"

$config = Get-Config -iniFile $iniFile
$devCertPassword = $config.DevCertPassword
$apiOutputPfxPath = "$PSScriptRoot\..\OregonTilth.API\kyctg-api-v1.dev.sitkatech.com.pfx"

$apiPfxExists = (Test-Path $apiOutputPfxPath -PathType Leaf)

if($apiPfxExists) {
   Write-Output "API PFX file already exists at: $apiOutputPfxPath"
} else {
     # api pfx
    Write-Output "Creating PFX file at: $apiOutputPfxPath"
    # create keys
    openssl req -newkey rsa:2048 -x509 -nodes -keyout "$PSScriptRoot\temp\api-server.key" -new -out "$PSScriptRoot\temp\api-server.crt" -config "$PSScriptRoot\dev-cert.cnf" -sha256 -days 3650  2>$null
    # convert to pfx
    openssl pkcs12 -export -out $apiOutputPfxPath -inkey "$PSScriptRoot\temp\api-server.key" -in "$PSScriptRoot\temp\api-server.crt" -passout pass:"$devCertPassword" 2>$null

    
}
# import pfx file
Write-Output "Importing PFX file at: $apiOutputPfxPath"
Import-PfxCertificate -FilePath $apiOutputPfxPath -CertStoreLocation 'Cert:\LocalMachine\Root' -Password (ConvertTo-SecureString -AsPlainText -Force $devCertPassword)



$webOutputPfxPath = "$PSScriptRoot\..\OregonTilth.Web\kyctg.localhost.sitkatech.com.pfx"
$webPfxExists = (Test-Path $webOutputPfxPath -PathType Leaf)
if($webPfxExists) { 
    Write-Output "Web PFX file already exists at: $webOutputPfxPath"
} else {
    Write-Output "Creating PFX file at: $webOutputPfxPath"
    # create keys
    openssl req -newkey rsa:2048 -x509 -nodes -keyout "$PSScriptRoot\..\OregonTilth.Web\server.key" -new -out "$PSScriptRoot\..\OregonTilth.Web\server.crt" -config "$PSScriptRoot\web-dev-cert.cnf" -sha256 -days 3650  2>$null
    # convert to pfx
    openssl pkcs12 -export -out $webOutputPfxPath -inkey "$PSScriptRoot\..\OregonTilth.Web\server.key" -in "$PSScriptRoot\..\OregonTilth.Web\server.crt" -passout pass:"$devCertPassword" 2>$null
}
# import pfx file
    Write-Output "Importing PFX file at: $webOutputPfxPath"
    Import-PfxCertificate -FilePath $webOutputPfxPath -CertStoreLocation 'Cert:\LocalMachine\Root' -Password (ConvertTo-SecureString -AsPlainText -Force $devCertPassword)
