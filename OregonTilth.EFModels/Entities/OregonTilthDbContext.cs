using Microsoft.EntityFrameworkCore;

namespace OregonTilth.EFModels.Entities
{
    //public partial class OregonTilthDbContext
    //{
    //    partial void OnModelCreatingPartial(ModelBuilder modelBuilder)
    //    {
    //        modelBuilder.Entity<Crop>(entity =>
    //        {
                
    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.Crops)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<CropSpecificInfo>(entity =>
    //        {
    //            entity.HasOne(d => d.Crop)
    //                .WithMany(p => p.CropSpecificInfos)
    //                .HasForeignKey(d => d.CropID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.TpOrDsType)
    //                .WithMany(p => p.CropSpecificInfos)
    //                .HasForeignKey(d => d.TpOrDsTypeID)
    //                .OnDelete(DeleteBehavior.Cascade)
    //                .HasConstraintName("FK_CropSpecificInfo_TpOrDsType");

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.CropSpecificInfos)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<CropUnit>(entity =>
    //        {
    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.CropUnits)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<CropYieldInformation>(entity =>
    //        {
    //            entity.HasOne(d => d.Crop)
    //                .WithMany(p => p.CropYieldInformations)
    //                .HasForeignKey(d => d.CropID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.CropUnit)
    //                .WithMany(p => p.CropYieldInformations)
    //                .HasForeignKey(d => d.CropUnitID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.CropYieldInformations)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<CustomRichText>(entity =>
    //        {
    //            entity.HasOne(d => d.CustomRichTextType)
    //                .WithMany(p => p.CustomRichTexts)
    //                .HasForeignKey(d => d.CustomRichTextTypeID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });
            
    //        modelBuilder.Entity<FieldInputByCrop>(entity =>
    //        {
    //            entity.HasOne(d => d.Crop)
    //                .WithMany(p => p.FieldInputByCrops)
    //                .HasForeignKey(d => d.CropID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.FieldInputCost)
    //                .WithMany(p => p.FieldInputByCrops)
    //                .HasForeignKey(d => d.FieldInputCostID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.FieldInputByCrops)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<FieldInputCost>(entity =>
    //        {
    //            entity.HasOne(d => d.FieldUnitType)
    //                .WithMany(p => p.FieldInputCosts)
    //                .HasForeignKey(d => d.FieldUnitTypeID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.FieldInputCosts)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<FieldLaborActivity>(entity =>
    //        {
    //            entity.HasOne(d => d.FieldLaborActivityCategory)
    //                .WithMany(p => p.FieldLaborActivities)
    //                .HasForeignKey(d => d.FieldLaborActivityCategoryID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.FieldLaborActivities)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<FieldLaborByCrop>(entity =>
    //        {
    //            entity.HasOne(d => d.Crop)
    //                .WithMany(p => p.FieldLaborByCrops)
    //                .HasForeignKey(d => d.CropID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.FieldStandardTime)
    //                .WithMany(p => p.FieldLaborByCrops)
    //                .HasForeignKey(d => d.FieldStandardTimeID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.FieldLaborByCrops)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<FieldStandardTime>(entity =>
    //        {
    //            entity.HasOne(d => d.FieldLaborActivity)
    //                .WithMany(p => p.FieldStandardTimes)
    //                .HasForeignKey(d => d.FieldLaborActivityID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.LaborType)
    //                .WithMany(p => p.FieldStandardTimes)
    //                .HasForeignKey(d => d.LaborTypeID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.FieldStandardTimes)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<HarvestPostHarvestStandardTime>(entity =>
    //        {
    //            entity.HasOne(d => d.Crop)
    //                .WithMany(p => p.HarvestPostHarvestStandardTimes)
    //                .HasForeignKey(d => d.CropID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.CropUnit)
    //                .WithMany(p => p.HarvestPostHarvestStandardTimes)
    //                .HasForeignKey(d => d.CropUnitID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.HarvestType)
    //                .WithMany(p => p.HarvestPostHarvestStandardTimes)
    //                .HasForeignKey(d => d.HarvestTypeID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.HarvestPostHarvestStandardTimes)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });
            
    //        modelBuilder.Entity<Machinery>(entity =>
    //        {
    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.Machineries)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });
            
    //        modelBuilder.Entity<TimeStudy>(entity =>
    //        {
    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.TimeStudies)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });
            
    //        modelBuilder.Entity<TransplantProductionInformation>(entity =>
    //        {
    //            entity.HasOne(d => d.Crop)
    //                .WithMany(p => p.TransplantProductionInformations)
    //                .HasForeignKey(d => d.CropID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Phase)
    //                .WithMany(p => p.TransplantProductionInformations)
    //                .HasForeignKey(d => d.PhaseID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.TransplantProductionTrayType)
    //                .WithMany(p => p.TransplantProductionInformations)
    //                .HasForeignKey(d => d.TransplantProductionTrayTypeID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.TransplantProductionInformations)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<TransplantProductionInput>(entity =>
    //        {
    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.TransplantProductionInputs)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<TransplantProductionInputCost>(entity =>
    //        {
    //            entity.HasOne(d => d.TransplantProductionInput)
    //                .WithMany(p => p.TransplantProductionInputCosts)
    //                .HasForeignKey(d => d.TransplantProductionInputID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.TransplantProductionTrayType)
    //                .WithMany(p => p.TransplantProductionInputCosts)
    //                .HasForeignKey(d => d.TransplantProductionTrayTypeID)
    //                .OnDelete(DeleteBehavior.Cascade)
    //                .HasConstraintName("FK_TransplantProductionTrayTypeCost_TransplantProductionTrayType_TransplantProductionTrayTypeID");

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.TransplantProductionInputCosts)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<TransplantProductionLaborActivity>(entity =>
    //        {
    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.TransplantProductionLaborActivities)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<TransplantProductionLaborActivityByCrop>(entity =>
    //        {
    //            entity.HasOne(d => d.TransplantProductionInformation)
    //                .WithMany(p => p.TransplantProductionLaborActivityByCrops)
    //                .HasForeignKey(d => d.TransplantProductionInformationID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.TransplantProductionLaborActivity)
    //                .WithMany(p => p.TransplantProductionLaborActivityByCrops)
    //                .HasForeignKey(d => d.TransplantProductionLaborActivityID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.TransplantProductionLaborActivityByCrops)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<TransplantProductionStandardTime>(entity =>
    //        {
    //            entity.HasOne(d => d.TransplantProductionLaborActivity)
    //                .WithMany(p => p.TransplantProductionStandardTimes)
    //                .HasForeignKey(d => d.TransplantProductionLaborActivityID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.TransplantProductionTrayType)
    //                .WithMany(p => p.TransplantProductionStandardTimes)
    //                .HasForeignKey(d => d.TransplantProductionTrayTypeID)
    //                .OnDelete(DeleteBehavior.Cascade);

    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.TransplantProductionStandardTimes)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<TransplantProductionTrayType>(entity =>
    //        {
    //            entity.HasOne(d => d.Workbook)
    //                .WithMany(p => p.TransplantProductionTrayTypes)
    //                .HasForeignKey(d => d.WorkbookID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });

    //        modelBuilder.Entity<Workbook>(entity =>
    //        {
    //            entity.HasOne(d => d.User)
    //                .WithMany(p => p.Workbooks)
    //                .HasForeignKey(d => d.UserID)
    //                .OnDelete(DeleteBehavior.Cascade);
    //        });
    //    }
    //}
}