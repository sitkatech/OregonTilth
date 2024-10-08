
"Download OregonTilth"
& "$PSScriptRoot\DatabaseDownload.ps1" -iniFile "./build.ini"

"Restore OregonTilth"
& "$PSScriptRoot\DatabaseRestore.ps1" -iniFile "./build.ini"
