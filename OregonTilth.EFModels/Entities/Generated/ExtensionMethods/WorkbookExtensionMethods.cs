//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[Workbook]

using OregonTilth.Models.DataTransferObjects;

namespace OregonTilth.EFModels.Entities
{
    public static partial class WorkbookExtensionMethods
    {
        public static WorkbookDto AsDto(this Workbook workbook)
        {
            var workbookDto = new WorkbookDto()
            {
                WorkbookID = workbook.WorkbookID,
                User = workbook.User.AsDto(),
                CreateDate = workbook.CreateDate,
                WorkbookName = workbook.WorkbookName,
                AverageHourlyWage = workbook.AverageHourlyWage,
                StandardUnitOfSpaceLength = workbook.StandardUnitOfSpaceLength,
                StandardUnitOfSpaceWidth = workbook.StandardUnitOfSpaceWidth
            };
            DoCustomMappings(workbook, workbookDto);
            return workbookDto;
        }

        static partial void DoCustomMappings(Workbook workbook, WorkbookDto workbookDto);

        public static WorkbookSimpleDto AsSimpleDto(this Workbook workbook)
        {
            var workbookSimpleDto = new WorkbookSimpleDto()
            {
                WorkbookID = workbook.WorkbookID,
                UserID = workbook.UserID,
                CreateDate = workbook.CreateDate,
                WorkbookName = workbook.WorkbookName,
                AverageHourlyWage = workbook.AverageHourlyWage,
                StandardUnitOfSpaceLength = workbook.StandardUnitOfSpaceLength,
                StandardUnitOfSpaceWidth = workbook.StandardUnitOfSpaceWidth
            };
            DoCustomSimpleDtoMappings(workbook, workbookSimpleDto);
            return workbookSimpleDto;
        }

        static partial void DoCustomSimpleDtoMappings(Workbook workbook, WorkbookSimpleDto workbookSimpleDto);
    }
}