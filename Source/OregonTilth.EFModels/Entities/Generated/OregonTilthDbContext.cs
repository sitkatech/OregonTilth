using System;
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
        public virtual DbSet<CropUnit> CropUnits { get; set; }
        public virtual DbSet<CustomRichText> CustomRichTexts { get; set; }
        public virtual DbSet<CustomRichTextType> CustomRichTextTypes { get; set; }
        public virtual DbSet<DatabaseMigration> DatabaseMigrations { get; set; }
        public virtual DbSet<FieldDefinition> FieldDefinitions { get; set; }
        public virtual DbSet<FieldDefinitionType> FieldDefinitionTypes { get; set; }
        public virtual DbSet<FieldInputByCost> FieldInputByCosts { get; set; }
        public virtual DbSet<FieldInputByCrop> FieldInputByCrops { get; set; }
        public virtual DbSet<FieldLaborActivity> FieldLaborActivities { get; set; }
        public virtual DbSet<FieldLaborActivityCategory> FieldLaborActivityCategories { get; set; }
        public virtual DbSet<FieldLaborByCrop> FieldLaborByCrops { get; set; }
        public virtual DbSet<FieldUnitType> FieldUnitTypes { get; set; }
        public virtual DbSet<FileResource> FileResources { get; set; }
        public virtual DbSet<FileResourceMimeType> FileResourceMimeTypes { get; set; }
        public virtual DbSet<HarvestType> HarvestTypes { get; set; }
        public virtual DbSet<LaborType> LaborTypes { get; set; }
        public virtual DbSet<Machinery> Machineries { get; set; }
        public virtual DbSet<Phase> Phases { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<TpOrDsType> TpOrDsTypes { get; set; }
        public virtual DbSet<TransplantProductionLaborActivity> TransplantProductionLaborActivities { get; set; }
        public virtual DbSet<TransplantProductionLaborActivityByCrop> TransplantProductionLaborActivityByCrops { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Workbook> Workbooks { get; set; }

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

            modelBuilder.Entity<CropUnit>(entity =>
            {
                entity.Property(e => e.CropUnitName).IsUnicode(false);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.CropUnits)
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

            modelBuilder.Entity<FieldInputByCost>(entity =>
            {
                entity.Property(e => e.FieldInputByCostName).IsUnicode(false);

                entity.Property(e => e.Notes).IsUnicode(false);

                entity.HasOne(d => d.FieldUnitType)
                    .WithMany(p => p.FieldInputByCosts)
                    .HasForeignKey(d => d.FieldUnitTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldInputByCosts)
                    .HasForeignKey(d => d.WorkbookID)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<FieldInputByCrop>(entity =>
            {
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.FieldInputByCrops)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.FieldInputByCost)
                    .WithMany(p => p.FieldInputByCrops)
                    .HasForeignKey(d => d.FieldInputByCostID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldInputByCrops)
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
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.FieldLaborByCrops)
                    .HasForeignKey(d => d.CropID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.FieldLaborActivity)
                    .WithMany(p => p.FieldLaborByCrops)
                    .HasForeignKey(d => d.FieldLaborActivityID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.LaborType)
                    .WithMany(p => p.FieldLaborByCrops)
                    .HasForeignKey(d => d.LaborTypeID)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.FieldLaborByCrops)
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

                entity.HasOne(d => d.Workbook)
                    .WithMany(p => p.Machineries)
                    .HasForeignKey(d => d.WorkbookID)
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

            modelBuilder.Entity<TpOrDsType>(entity =>
            {
                entity.Property(e => e.TpOrDsTypeID).ValueGeneratedNever();

                entity.Property(e => e.TpOrDsTypeDisplayName).IsUnicode(false);

                entity.Property(e => e.TpOrDsTypeName).IsUnicode(false);
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
                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.TransplantProductionLaborActivityByCrops)
                    .HasForeignKey(d => d.CropID)
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

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
