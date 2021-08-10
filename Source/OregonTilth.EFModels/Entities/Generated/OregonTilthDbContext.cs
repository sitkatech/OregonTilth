﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

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
        public virtual DbSet<CustomRichTextType> CustomRichTextTypes { get; set; }
        public virtual DbSet<DatabaseMigration> DatabaseMigrations { get; set; }
        public virtual DbSet<FieldDefinition> FieldDefinitions { get; set; }
        public virtual DbSet<FieldDefinitionType> FieldDefinitionTypes { get; set; }
        public virtual DbSet<FieldInputByCrop> FieldInputByCrops { get; set; }
        public virtual DbSet<FieldInputCost> FieldInputCosts { get; set; }
        public virtual DbSet<FieldLaborActivity> FieldLaborActivities { get; set; }
        public virtual DbSet<FieldLaborActivityCategory> FieldLaborActivityCategories { get; set; }
        public virtual DbSet<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        public virtual DbSet<FieldStandardTime> FieldStandardTimes { get; set; }
        public virtual DbSet<FieldUnitType> FieldUnitTypes { get; set; }
        public virtual DbSet<FileResource> FileResources { get; set; }
        public virtual DbSet<FileResourceMimeType> FileResourceMimeTypes { get; set; }
        public virtual DbSet<HarvestPostHarvestStandardTime> HarvestPostHarvestStandardTimes { get; set; }
        public virtual DbSet<HarvestType> HarvestTypes { get; set; }
        public virtual DbSet<LaborType> LaborTypes { get; set; }
        public virtual DbSet<Machinery> Machineries { get; set; }
        public virtual DbSet<Page> Pages { get; set; }
        public virtual DbSet<Phase> Phases { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<TimeStudy> TimeStudies { get; set; }
        public virtual DbSet<TpOrDsType> TpOrDsTypes { get; set; }
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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Crop>(entity =>
            {
                entity.Property(e => e.CropName).IsUnicode(false);

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

                entity.HasOne(d => d.TpOrDsType)
                    .WithMany(p => p.CropSpecificInfos)
                    .HasForeignKey(d => d.TpOrDsTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CropSpecificInfo_TpOrDsType");

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.CropSpecificInfos)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CropUnit>(entity =>
            {
                entity.Property(e => e.CropUnitName).IsUnicode(false);

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

            modelBuilder.Entity<CustomRichText>(entity =>
            {
                entity.Property(e => e.CustomRichTextContent).IsUnicode(false);

                entity.HasOne(d => d.CustomRichTextType)
                    .WithMany(p => p.CustomRichTexts)
                    .HasForeignKey(d => d.CustomRichTextTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CustomRichTextType>(entity =>
            {
                entity.Property(e => e.CustomRichTextTypeID).ValueGeneratedNever();

                entity.Property(e => e.CustomRichTextTypeDisplayName).IsUnicode(false);

                entity.Property(e => e.CustomRichTextTypeName).IsUnicode(false);
            });

            modelBuilder.Entity<DatabaseMigration>(entity =>
            {
                entity.HasKey(e => e.DatabaseMigrationNumber)
                    .HasName("PK_DatabaseMigration_DatabaseMigrationNumber");

                entity.Property(e => e.DatabaseMigrationNumber).ValueGeneratedNever();
            });

            modelBuilder.Entity<FieldDefinition>(entity =>
            {
                entity.Property(e => e.FieldDefinitionValue).IsUnicode(false);

                entity.HasOne(d => d.FieldDefinitionType)
                    .WithMany(p => p.FieldDefinitions)
                    .HasForeignKey(d => d.FieldDefinitionTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldDefinitionType>(entity =>
            {
                entity.Property(e => e.FieldDefinitionTypeID).ValueGeneratedNever();

                entity.Property(e => e.FieldDefinitionTypeDisplayName).IsUnicode(false);

                entity.Property(e => e.FieldDefinitionTypeName).IsUnicode(false);
            });

            modelBuilder.Entity<FieldInputByCrop>(entity =>
            {
                entity.Property(e => e.Notes).IsUnicode(false);

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
                entity.Property(e => e.FieldInputCostName).IsUnicode(false);

                entity.Property(e => e.Notes).IsUnicode(false);

                entity.HasOne(d => d.FieldUnitType)
                    .WithMany(p => p.FieldInputCosts)
                    .HasForeignKey(d => d.FieldUnitTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldInputCosts)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldLaborActivity>(entity =>
            {
                entity.Property(e => e.FieldLaborActivityName).IsUnicode(false);

                entity.HasOne(d => d.FieldLaborActivityCategory)
                    .WithMany(p => p.FieldLaborActivities)
                    .HasForeignKey(d => d.FieldLaborActivityCategoryID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldLaborActivities)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldLaborActivityCategory>(entity =>
            {
                entity.Property(e => e.FieldLaborActivityCategoryID).ValueGeneratedNever();

                entity.Property(e => e.FieldLaborActivityCategoryDisplayName).IsUnicode(false);

                entity.Property(e => e.FieldLaborActivityCategoryName).IsUnicode(false);
            });

            modelBuilder.Entity<FieldLaborByCrop>(entity =>
            {
                entity.Property(e => e.Notes).IsUnicode(false);

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

                entity.HasOne(d => d.LaborType)
                    .WithMany(p => p.FieldStandardTimes)
                    .HasForeignKey(d => d.LaborTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldStandardTimes)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldUnitType>(entity =>
            {
                entity.Property(e => e.FieldUnitTypeID).ValueGeneratedNever();

                entity.Property(e => e.FieldUnitTypeDisplayName).IsUnicode(false);

                entity.Property(e => e.FieldUnitTypeName).IsUnicode(false);
            });

            modelBuilder.Entity<FileResource>(entity =>
            {
                entity.Property(e => e.OriginalBaseFilename).IsUnicode(false);

                entity.Property(e => e.OriginalFileExtension).IsUnicode(false);

                entity.HasOne(d => d.CreateUser)
                    .WithMany(p => p.FileResources)
                    .HasForeignKey(d => d.CreateUserID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_FileResource_User_CreateUserID_UserID");

                entity.HasOne(d => d.FileResourceMimeType)
                    .WithMany(p => p.FileResources)
                    .HasForeignKey(d => d.FileResourceMimeTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FileResourceMimeType>(entity =>
            {
                entity.Property(e => e.FileResourceMimeTypeID).ValueGeneratedNever();

                entity.Property(e => e.FileResourceMimeTypeContentTypeName).IsUnicode(false);

                entity.Property(e => e.FileResourceMimeTypeDisplayName).IsUnicode(false);

                entity.Property(e => e.FileResourceMimeTypeIconNormalFilename).IsUnicode(false);

                entity.Property(e => e.FileResourceMimeTypeIconSmallFilename).IsUnicode(false);

                entity.Property(e => e.FileResourceMimeTypeName).IsUnicode(false);
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

                entity.HasOne(d => d.HarvestType)
                    .WithMany(p => p.HarvestPostHarvestStandardTimes)
                    .HasForeignKey(d => d.HarvestTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.HarvestPostHarvestStandardTimes)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<HarvestType>(entity =>
            {
                entity.Property(e => e.HarvestTypeID).ValueGeneratedNever();

                entity.Property(e => e.HarvestTypeDisplayName).IsUnicode(false);

                entity.Property(e => e.HarvestTypeName).IsUnicode(false);
            });

            modelBuilder.Entity<LaborType>(entity =>
            {
                entity.Property(e => e.LaborTypeID).ValueGeneratedNever();

                entity.Property(e => e.LaborTypeDisplayName).IsUnicode(false);

                entity.Property(e => e.LaborTypeName).IsUnicode(false);
            });

            modelBuilder.Entity<Machinery>(entity =>
            {
                entity.Property(e => e.MachineryName).IsUnicode(false);

                entity.Property(e => e.Notes).IsUnicode(false);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.Machineries)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Page>(entity =>
            {
                entity.HasOne(d => d.CustomRichTextType)
                    .WithMany(p => p.Pages)
                    .HasForeignKey(d => d.CustomRichTextTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Phase>(entity =>
            {
                entity.Property(e => e.PhaseID).ValueGeneratedNever();

                entity.Property(e => e.PhaseDisplayName).IsUnicode(false);

                entity.Property(e => e.PhaseName).IsUnicode(false);
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.RoleID).ValueGeneratedNever();

                entity.Property(e => e.RoleDescription).IsUnicode(false);

                entity.Property(e => e.RoleDisplayName).IsUnicode(false);

                entity.Property(e => e.RoleName).IsUnicode(false);
            });

            modelBuilder.Entity<TimeStudy>(entity =>
            {
                entity.Property(e => e.Notes).IsUnicode(false);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TimeStudies)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TpOrDsType>(entity =>
            {
                entity.Property(e => e.TpOrDsTypeID).ValueGeneratedNever();

                entity.Property(e => e.TpOrDsTypeDisplayName).IsUnicode(false);

                entity.Property(e => e.TpOrDsTypeName).IsUnicode(false);
            });

            modelBuilder.Entity<TransplantProductionInformation>(entity =>
            {
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.TransplantProductionInformations)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Phase)
                    .WithMany(p => p.TransplantProductionInformations)
                    .HasForeignKey(d => d.PhaseID)
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
                entity.Property(e => e.TransplantProductionInputName).IsUnicode(false);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionInputs)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionInputCost>(entity =>
            {
                entity.Property(e => e.Notes).IsUnicode(false);

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
                entity.Property(e => e.TransplantProductionLaborActivityName).IsUnicode(false);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionLaborActivities)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<TransplantProductionLaborActivityByCrop>(entity =>
            {
                entity.Property(e => e.Notes).IsUnicode(false);

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
                entity.Property(e => e.TransplantProductionTrayTypeName).IsUnicode(false);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.TransplantProductionTrayTypes)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Company).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.FirstName).IsUnicode(false);

                entity.Property(e => e.LastName).IsUnicode(false);

                entity.Property(e => e.LoginName).IsUnicode(false);

                entity.Property(e => e.Phone).IsUnicode(false);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Workbook>(entity =>
            {
                entity.Property(e => e.WorkbookName).IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Workbooks)
                    .HasForeignKey(d => d.UserID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<vFieldLaborActivityForTimeStudy>(entity =>
            {
                entity.ToView("vFieldLaborActivityForTimeStudy");

                entity.Property(e => e.FieldLaborActivityName).IsUnicode(false);

                entity.Property(e => e.LaborTypeDisplayName).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
