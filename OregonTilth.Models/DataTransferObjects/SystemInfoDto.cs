using System;
using System.IO;
using System.Reflection;

namespace OregonTilth.Models.DataTransferObjects;

public class SystemInfoDto
{
    public string Environment { get; set; }
    public string Version { get; set; }
    public string CurrentTimeUTC { get; set; }
    public DateTime CompilationDateTime { get; set; }
    public string Application => Assembly.GetEntryAssembly().GetName().Name;

    public SystemInfoDto()
    {
        var assemblyVersion = Assembly.GetEntryAssembly()!.GetName().Version;
        Version = $"{assemblyVersion!.Major}.{assemblyVersion!.Minor}.{assemblyVersion!.Build}";

        var localAssemblyPathString = new Uri(Assembly.GetExecutingAssembly().Location).LocalPath;
        var fileInfo = new FileInfo(localAssemblyPathString);
        CompilationDateTime = fileInfo.LastWriteTime;
    }
}