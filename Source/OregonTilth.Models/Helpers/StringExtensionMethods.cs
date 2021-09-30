using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OregonTilth.EFModels.Util
{
    public static class StringExtensionMethods
    {
        public static string ToLowerTrim(this string value)
        {
            return value.ToLower().Trim();
        }
    }
}
