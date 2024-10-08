//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Phase]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class PhaseExtensionMethods
    {
        public static PhaseDto AsDto(this Phase phase)
        {
            var phaseDto = new PhaseDto()
            {
                PhaseID = phase.PhaseID,
                PhaseName = phase.PhaseName,
                PhaseDisplayName = phase.PhaseDisplayName
            };
            DoCustomMappings(phase, phaseDto);
            return phaseDto;
        }

        static partial void DoCustomMappings(Phase phase, PhaseDto phaseDto);

        public static PhaseSimpleDto AsSimpleDto(this Phase phase)
        {
            var phaseSimpleDto = new PhaseSimpleDto()
            {
                PhaseID = phase.PhaseID,
                PhaseName = phase.PhaseName,
                PhaseDisplayName = phase.PhaseDisplayName
            };
            DoCustomSimpleDtoMappings(phase, phaseSimpleDto);
            return phaseSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(Phase phase, PhaseSimpleDto phaseSimpleDto);
    }
}