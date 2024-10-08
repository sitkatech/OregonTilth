
"Download OregonTilth"
& "$PSScriptRoot\DatabaseDownload.ps1" -iniFile "./build.ini"

"Restore OregonTilth"
& "$PSScriptRoot\DatabaseRestore.ps1" -iniFile "./build.ini"

"Build OregonTilth"
& "$PSScriptRoot\DatabaseBuild.ps1" -iniFile "./build.ini"
