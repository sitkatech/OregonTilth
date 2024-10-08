using System;

namespace OregonTilth.API.Services.Filters
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Parameter, AllowMultiple = false, Inherited = true)]
    public class FromFilterAttribute : Attribute
    {
    }
}