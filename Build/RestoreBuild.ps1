

"Restore Delta Conveyance"
& "$PSScriptRoot\DatabaseRestore.ps1"  -iniFile "./build.ini"

"Build Delta Conveyance"
& "$PSScriptRoot\DatabaseBuild.ps1" -iniFile "./build.ini"
