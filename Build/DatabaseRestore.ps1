
Param(
  [Parameter (Mandatory = $false)]
  [string] $iniFile = ".\build.ini"
)

Import-Module .\Get-Config.psm1

$config = Get-Config -iniFile $iniFile

$sqlServer = $config.Server
$currentDbName = $config.DatabaseName
$sqlConnectionString = "Server='$sqlserver';Database='$currentDbName';Integrated Security=True;TrustServerCertificate=True"
$path = "./temp/" + $currentDbName + ".bacpac"

if (Test-Path -Path $path) {
  Import-Module .\Remove-Database.psm1
  Import-Module .\Import-BacPac.psm1

  # Drop database geooptix
  Remove-Database -sqlserver $sqlServer -dbName $currentDbName

  # Import the backed up db
  Import-BacPac -bacpacPath $path -sqlConnectionString $sqlConnectionString
}
else {
  "BacPac at path: " + $path + " not found."
}