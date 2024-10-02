

"Restore Oregon Tilth"
& "$PSScriptRoot\DatabaseRestore.ps1"  -iniFile "./build.ini"

"Build Oregon Tilth"
& "$PSScriptRoot\DatabaseBuild.ps1" -iniFile "./build.ini"
