//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[TransplantProductionInformation]
namespace OregonTilth.EFModels.Entities
{
    public partial class TransplantProductionInformation
    {
        public Phase Phase => Phase.AllLookupDictionary[PhaseID];
    }
}