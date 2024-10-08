using System;

namespace OregonTilth.API.Services.Logging;

[AttributeUsage(AttributeTargets.Method)]
public class LogIgnoreAttribute : Attribute
{
    public LogIgnoreAttribute() { }
}