using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace OregonTilth.EFModels.Entities
{
    public partial class OregonTilthDbContext : DbContext
    {
        public OregonTilthDbContext()
        {
        }

        public OregonTilthDbContext(DbContextOptions<OregonTilthDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Crop> Crops { get; set; }
        public virtual DbSet<CropSpecificInfo> CropSpecificInfos { get; set; }
        public virtual DbSet<CropUnit> CropUnits { get; set; }
        public virtual DbSet<CropYieldInformation> CropYieldInformations { get; set; }
        public virtual DbSet<CustomRichText> CustomRichTexts { get; set; }
        public virtual DbSet<FieldDefinition> FieldDefinitions { get; set; }
        public virtual DbSet<FieldInputByCrop> FieldInputByCrops { get; set; }
        public virtual DbSet<FieldInputCost> FieldInputCosts { get; set; }
        public virtual DbSet<FieldLaborActivity> FieldLaborActivities { get; set; }
        public virtual DbSet<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        public virtual DbSet<FieldStandardTime> FieldStandardTimes { get; set; }
        public virtual DbSet<FileResource> FileResources { get; set; }
        public virtual DbSet<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; }
        public virtual DbSet<Machinery> Machineries { get; set; }
        public virtual DbSet<Page> Pages { get; set; }
        public virtual DbSet<TimeStudy> TimeStudies { get; set; }
        public virtual DbSet<TransplantProductionInformation> TransplantProductionInformations { get; set; }
        public virtual DbSet<TransplantProductionInput> TransplantProductionInputs { get; set; }
        public virtual DbSet<TransplantProductionInputCost> TransplantProductionInputCosts { get; set; }
        public virtual DbSet<TransplantProductionLaborActivity> TransplantProductionLaborActivities { get; set; }
        public virtual DbSet<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; }
        public virtual DbSet<TransplantProductionStandardTime> TransplantProductionStandardTimes { get; set; }
        public virtual DbSet<TransplantProductionTrayType> TransplantProductionTrayTypes { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Workbook> Workbooks { get; set; }
        public virtual DbSet<vFieldLaborActivityForTimeStudy> vFieldLaborActivityForTimeStudies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Crop>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.Crops)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CropSpecificInfo>(entity =>
            {
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.CropSpecificInfos)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.CropSpecificInfos)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CropUnit>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.CropUnits)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CropYieldInformation>(entity =>
            {
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.CropYieldInformations)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.CropUnit)
                    .WithMany(p => p.CropYieldInformations)
                    .HasForeignKey(d => d.CropUnitID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.CropYieldInformations)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldInputByCrop>(entity =>
            {
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.FieldInputByCrops)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.FieldInputCost)
                    .WithMany(p => p.FieldInputByCrops)
                    .HasForeignKey(d => d.FieldInputCostID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldInputByCrops)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldInputCost>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldInputCosts)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldLaborActivity>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldLaborActivities)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldLaborByCrop>(entity =>
            {
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.FieldLaborByCrops)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.FieldStandardTime)
                    .WithMany(p => p.FieldLaborByCrops)
                    .HasForeignKey(d => d.FieldStandardTimeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldLaborByCrops)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldStandardTime>(entity =>
            {
                entity.HasOne(d => d.FieldLaborActivity)
                    .WithMany(p => p.FieldStandardTimes)
                    .HasForeignKey(d => d.FieldLaborActivityID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldStandardTimes)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FileResource>(entity =>
            {
                entity.HasOne(d => d.CreateUser)
                    .WithMany(p => p.FileResources)
                    .HasForeignKey(d => d.CreateUserID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_FileResource_User_CreateUserID_UserID");
            });

            modelBuilder.Entity<HarvestPostHarvestStandardTime>(entity =>
            {
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.HarvestPostHarvestStandardTimes)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.CropUnit)
                    .WithMany(p => p.HarvestPostHarvestStandardTimes)
                    .HasForeignKey(d => d.CropUnitID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.HarvestPostHarvestStandardTimes)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Machinery>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.Machineries)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TimeStudy>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TimeStudies)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionInformation>(entity =>
            {
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.TransplantProductionInformations)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.TransplantProductionTrayType)
                    .WithMany(p => p.TransplantProductionInformations)
                    .HasForeignKey(d => d.TransplantProductionTrayTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionInformations)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionInput>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionInputs)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionInputCost>(entity =>
            {
                entity.HasOne(d => d.TransplantProductionInput)
                    .WithMany(p => p.TransplantProductionInputCosts)
                    .HasForeignKey(d => d.TransplantProductionInputID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.TransplantProductionTrayType)
                    .WithMany(p => p.TransplantProductionInputCosts)
                    .HasForeignKey(d => d.TransplantProductionTrayTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TransplantProductionTrayTypeCost_TransplantProductionTrayType_TransplantProductionTrayTypeID");

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionInputCosts)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionLaborActivity>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionLaborActivities)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionLaborActivityByCrop>(entity =>
            {
                entity.HasOne(d => d.TransplantProductionInformation)
                    .WithMany(p => p.TransplantProductionLaborActivityByCrops)
                    .HasForeignKey(d => d.TransplantProductionInformationID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.TransplantProductionLaborActivity)
                    .WithMany(p => p.TransplantProductionLaborActivityByCrops)
                    .HasForeignKey(d => d.TransplantProductionLaborActivityID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionLaborActivityByCrops)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionStandardTime>(entity =>
            {
                entity.HasOne(d => d.TransplantProductionLaborActivity)
                    .WithMany(p => p.TransplantProductionStandardTimes)
                    .HasForeignKey(d => d.TransplantProductionLaborActivityID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.TransplantProductionTrayType)
                    .WithMany(p => p.TransplantProductionStandardTimes)
                    .HasForeignKey(d => d.TransplantProductionTrayTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionStandardTimes)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionTrayType>(entity =>
            {
                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionTrayTypes)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Workbook>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.Workbooks)
                    .HasForeignKey(d => d.UserID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<vFieldLaborActivityForTimeStudy>(entity =>
            {
                entity.ToView("vFieldLaborActivityForTimeStudy");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
