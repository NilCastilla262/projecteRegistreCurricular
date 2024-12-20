USE [master]
GO
/****** Object:  Database [Curricular2]    Script Date: 20/12/2024 16:59:22 ******/
CREATE DATABASE [Curricular2]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Curricular2', FILENAME = N'/var/opt/mssql/data/Curricular2.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Curricular2_log', FILENAME = N'/var/opt/mssql/data/Curricular2_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [Curricular2] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Curricular2].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Curricular2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Curricular2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Curricular2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Curricular2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Curricular2] SET ARITHABORT OFF 
GO
ALTER DATABASE [Curricular2] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Curricular2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Curricular2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Curricular2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Curricular2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Curricular2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Curricular2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Curricular2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Curricular2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Curricular2] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Curricular2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Curricular2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Curricular2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Curricular2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Curricular2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Curricular2] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Curricular2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Curricular2] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Curricular2] SET  MULTI_USER 
GO
ALTER DATABASE [Curricular2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Curricular2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Curricular2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Curricular2] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Curricular2] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Curricular2] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Curricular2] SET QUERY_STORE = ON
GO
ALTER DATABASE [Curricular2] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [Curricular2]
GO
/****** Object:  Table [dbo].[Criteria_Val]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Criteria_Val](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_Criteria_Pl] [uniqueidentifier] NULL,
	[Treballat] [bit] NULL,
	[UUID_Sda] [uniqueidentifier] NULL,
 CONSTRAINT [PK__Criteria__65A475E7C90E235C] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Criteria_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Criteria_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_CompetencyDescription] [uniqueidentifier] NOT NULL,
	[Description] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[ViewCriteriaVal]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[ViewCriteriaVal]
AS
SELECT cv.UUID, cv.Treballat, cp.Description, cv.UUID_Sda
FROM     dbo.Criteria_Val AS cv INNER JOIN
                  dbo.Criteria_Pl AS cp ON cv.UUID_Criteria_Pl = cp.UUID
GO
/****** Object:  Table [dbo].[SaberCriteria_Val]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SaberCriteria_Val](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_SaberCriteria_Pl] [uniqueidentifier] NULL,
	[Treballat] [bit] NULL,
	[UUID_Sda] [uniqueidentifier] NULL,
 CONSTRAINT [PK__SaberCri__65A475E7FE74B142] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SaberCriteria_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SaberCriteria_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_SabersDescription] [uniqueidentifier] NOT NULL,
	[Description] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[ViewSaberCriteriaVal]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[ViewSaberCriteriaVal]
AS
SELECT cv.UUID, cv.Treballat, cp.Description, cv.UUID_Sda
FROM     dbo.SaberCriteria_Val AS cv INNER JOIN
                  dbo.SaberCriteria_Pl AS cp ON cv.UUID_SaberCriteria_Pl = cp.UUID
GO
/****** Object:  Table [dbo].[SabersDescription_Val]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SabersDescription_Val](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_SabersDescription_Pl] [uniqueidentifier] NULL,
	[Treballat] [bit] NULL,
	[UUID_Sda] [uniqueidentifier] NULL,
 CONSTRAINT [PK__SabersDe__65A475E7F1D5DFE6] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SabersDescription_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SabersDescription_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[Description] [varchar](max) NULL,
	[UUID_CompetencyName] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[ViewSabersDescriptionVal]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[ViewSabersDescriptionVal]
AS
SELECT cv.UUID, cv.Treballat, cp.Description, cv.UUID_Sda
FROM     dbo.SabersDescription_Val AS cv INNER JOIN
                  dbo.SabersDescription_Pl AS cp ON cv.UUID_SabersDescription_Pl = cp.UUID
GO
/****** Object:  Table [dbo].[CompetencyDescription_Val]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetencyDescription_Val](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_CompetencyDescription_Pl] [uniqueidentifier] NULL,
	[Treballat] [bit] NULL,
	[UUID_Sda] [uniqueidentifier] NULL,
 CONSTRAINT [PK__Competen__65A475E72BE69F9E] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompetencyDescription_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetencyDescription_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_CompetencyName] [uniqueidentifier] NOT NULL,
	[Descripcion] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[ViewCompetencyDescriptionVal]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[ViewCompetencyDescriptionVal]
AS
SELECT cv.UUID, cv.Treballat, cp.Descripcion, cv.UUID_Sda
FROM     dbo.CompetencyDescription_Val AS cv INNER JOIN
                  dbo.CompetencyDescription_Pl AS cp ON cv.UUID_CompetencyDescription_Pl = cp.UUID
GO
/****** Object:  Table [dbo].[Centre]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Centre](
	[UUID] [uniqueidentifier] NOT NULL,
	[LogoUrl] [nvarchar](255) NULL,
	[Municipality] [varchar](50) NULL,
	[NomCentre] [nvarchar](255) NULL,
 CONSTRAINT [PK__Centre__65A475E7DD44D0F8] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompetencyName_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetencyName_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_CompetencyType] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](255) NULL,
	[Tipo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompetencyName_Val]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetencyName_Val](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_CompetencyType] [uniqueidentifier] NOT NULL,
	[Tipo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompetencyType_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetencyType_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_Plantilla] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompetencyType_Val]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetencyType_Val](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_Sda] [uniqueidentifier] NOT NULL,
	[Tipo] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Curs_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Curs_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[Curs] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GroupTable]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GroupTable](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_Centre] [uniqueidentifier] NOT NULL,
	[Letter] [nchar](10) NULL,
	[UUID_Curs] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK__GroupTab__65A475E77293799B] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Plantilla_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Plantilla_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_Curs] [uniqueidentifier] NOT NULL,
	[Active] [bit] NULL,
	[Name] [nvarchar](255) NULL,
 CONSTRAINT [PK__Plantill__65A475E7B76D35C5] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RelacioUserCenter]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RelacioUserCenter](
	[UUID_User] [uniqueidentifier] NOT NULL,
	[Role] [varchar](30) NULL,
	[UUID_Center] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RelacioUserSda]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RelacioUserSda](
	[UUID_User] [uniqueidentifier] NOT NULL,
	[UUID_Sda] [uniqueidentifier] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID_User] ASC,
	[UUID_Sda] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sda_Val]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sda_Val](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_Plantilla] [uniqueidentifier] NOT NULL,
	[UUID_Group] [uniqueidentifier] NULL,
	[endDate] [date] NULL,
	[description] [varchar](max) NULL,
	[tittle] [varchar](30) NULL,
	[UUID_Center] [uniqueidentifier] NULL,
	[active] [varchar](30) NULL,
	[startDate] [date] NULL,
 CONSTRAINT [PK__Sda_Val__65A475E78D7213AC] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTable]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTable](
	[UUID] [uniqueidentifier] NOT NULL,
	[Username] [varchar](50) NOT NULL,
	[Email] [nvarchar](255) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK__UserTabl__65A475E75FAE0E34] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vectors_Pl]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vectors_Pl](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_Plantilla] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vectors_Val]    Script Date: 20/12/2024 16:59:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vectors_Val](
	[UUID] [uniqueidentifier] NOT NULL,
	[UUID_Plantilla] [uniqueidentifier] NOT NULL,
	[Treballat] [bit] NULL,
	[UUID_Vectors_Pl] [uniqueidentifier] NULL,
	[UUID_Sda] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK__Vectors___65A475E7F36C178E] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Centre] ADD  CONSTRAINT [DF__Centre__UUID__6FE99F9F]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[CompetencyDescription_Pl] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[CompetencyDescription_Val] ADD  CONSTRAINT [DF__Competency__UUID__71D1E811]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[CompetencyName_Pl] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[CompetencyName_Val] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[CompetencyType_Pl] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[CompetencyType_Val] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[Criteria_Pl] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[Criteria_Val] ADD  CONSTRAINT [DF__Criteria_V__UUID__778AC167]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[Curs_Pl] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[GroupTable] ADD  CONSTRAINT [DF__GroupTable__UUID__797309D9]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[Plantilla_Pl] ADD  CONSTRAINT [DF__Plantilla___UUID__7A672E12]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[SaberCriteria_Pl] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[SaberCriteria_Val] ADD  CONSTRAINT [DF__SaberCrite__UUID__7C4F7684]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[SabersDescription_Pl] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[SabersDescription_Val] ADD  CONSTRAINT [DF__SabersDesc__UUID__7E37BEF6]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[Sda_Val] ADD  CONSTRAINT [DF__Sda_Val__UUID__7F2BE32F]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[UserTable] ADD  CONSTRAINT [DF__UserTable__UUID__00200768]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[Vectors_Pl] ADD  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[Vectors_Val] ADD  CONSTRAINT [DF__Vectors_Va__UUID__02084FDA]  DEFAULT (newid()) FOR [UUID]
GO
ALTER TABLE [dbo].[CompetencyDescription_Pl]  WITH CHECK ADD FOREIGN KEY([UUID_CompetencyName])
REFERENCES [dbo].[CompetencyName_Pl] ([UUID])
GO
ALTER TABLE [dbo].[CompetencyDescription_Val]  WITH CHECK ADD  CONSTRAINT [FK_CompetencyDescription_Val_CompetencyDescription_Pl] FOREIGN KEY([UUID_CompetencyDescription_Pl])
REFERENCES [dbo].[CompetencyDescription_Pl] ([UUID])
GO
ALTER TABLE [dbo].[CompetencyDescription_Val] CHECK CONSTRAINT [FK_CompetencyDescription_Val_CompetencyDescription_Pl]
GO
ALTER TABLE [dbo].[CompetencyDescription_Val]  WITH CHECK ADD  CONSTRAINT [FK_CompetencyDescription_Val_Sda_Val] FOREIGN KEY([UUID_Sda])
REFERENCES [dbo].[Sda_Val] ([UUID])
GO
ALTER TABLE [dbo].[CompetencyDescription_Val] CHECK CONSTRAINT [FK_CompetencyDescription_Val_Sda_Val]
GO
ALTER TABLE [dbo].[CompetencyDescription_Val]  WITH CHECK ADD  CONSTRAINT [FK_CompetencyDescription_Val_To_Pl] FOREIGN KEY([UUID_CompetencyDescription_Pl])
REFERENCES [dbo].[CompetencyDescription_Pl] ([UUID])
GO
ALTER TABLE [dbo].[CompetencyDescription_Val] CHECK CONSTRAINT [FK_CompetencyDescription_Val_To_Pl]
GO
ALTER TABLE [dbo].[CompetencyName_Pl]  WITH CHECK ADD FOREIGN KEY([UUID_CompetencyType])
REFERENCES [dbo].[CompetencyType_Pl] ([UUID])
GO
ALTER TABLE [dbo].[CompetencyName_Val]  WITH CHECK ADD FOREIGN KEY([UUID_CompetencyType])
REFERENCES [dbo].[CompetencyType_Val] ([UUID])
GO
ALTER TABLE [dbo].[CompetencyType_Pl]  WITH CHECK ADD  CONSTRAINT [FK__Competenc__UUID___07C12930] FOREIGN KEY([UUID_Plantilla])
REFERENCES [dbo].[Plantilla_Pl] ([UUID])
GO
ALTER TABLE [dbo].[CompetencyType_Pl] CHECK CONSTRAINT [FK__Competenc__UUID___07C12930]
GO
ALTER TABLE [dbo].[CompetencyType_Val]  WITH CHECK ADD  CONSTRAINT [FK_CompetencyType_Val_Sda_Val] FOREIGN KEY([UUID_Sda])
REFERENCES [dbo].[Sda_Val] ([UUID])
GO
ALTER TABLE [dbo].[CompetencyType_Val] CHECK CONSTRAINT [FK_CompetencyType_Val_Sda_Val]
GO
ALTER TABLE [dbo].[Criteria_Pl]  WITH CHECK ADD FOREIGN KEY([UUID_CompetencyDescription])
REFERENCES [dbo].[CompetencyDescription_Pl] ([UUID])
GO
ALTER TABLE [dbo].[Criteria_Val]  WITH CHECK ADD  CONSTRAINT [FK_Criteria_Val_Criteria_Pl] FOREIGN KEY([UUID_Criteria_Pl])
REFERENCES [dbo].[Criteria_Pl] ([UUID])
GO
ALTER TABLE [dbo].[Criteria_Val] CHECK CONSTRAINT [FK_Criteria_Val_Criteria_Pl]
GO
ALTER TABLE [dbo].[Criteria_Val]  WITH CHECK ADD  CONSTRAINT [FK_Criteria_Val_Sda_Val] FOREIGN KEY([UUID_Sda])
REFERENCES [dbo].[Sda_Val] ([UUID])
GO
ALTER TABLE [dbo].[Criteria_Val] CHECK CONSTRAINT [FK_Criteria_Val_Sda_Val]
GO
ALTER TABLE [dbo].[GroupTable]  WITH CHECK ADD  CONSTRAINT [FK__GroupTabl__UUID___0B91BA14] FOREIGN KEY([UUID_Centre])
REFERENCES [dbo].[Centre] ([UUID])
GO
ALTER TABLE [dbo].[GroupTable] CHECK CONSTRAINT [FK__GroupTabl__UUID___0B91BA14]
GO
ALTER TABLE [dbo].[GroupTable]  WITH CHECK ADD  CONSTRAINT [FK__GroupTabl__UUID___0C85DE4D] FOREIGN KEY([UUID_Curs])
REFERENCES [dbo].[Curs_Pl] ([UUID])
GO
ALTER TABLE [dbo].[GroupTable] CHECK CONSTRAINT [FK__GroupTabl__UUID___0C85DE4D]
GO
ALTER TABLE [dbo].[RelacioUserCenter]  WITH CHECK ADD  CONSTRAINT [FK_RelacioUserCenter_Centre] FOREIGN KEY([UUID_Center])
REFERENCES [dbo].[Centre] ([UUID])
GO
ALTER TABLE [dbo].[RelacioUserCenter] CHECK CONSTRAINT [FK_RelacioUserCenter_Centre]
GO
ALTER TABLE [dbo].[RelacioUserCenter]  WITH CHECK ADD  CONSTRAINT [FK_RelacioUserCenter_UserTable] FOREIGN KEY([UUID_User])
REFERENCES [dbo].[UserTable] ([UUID])
GO
ALTER TABLE [dbo].[RelacioUserCenter] CHECK CONSTRAINT [FK_RelacioUserCenter_UserTable]
GO
ALTER TABLE [dbo].[RelacioUserSda]  WITH CHECK ADD  CONSTRAINT [FK__RelacioUs__UUID___0D7A0286] FOREIGN KEY([UUID_User])
REFERENCES [dbo].[UserTable] ([UUID])
GO
ALTER TABLE [dbo].[RelacioUserSda] CHECK CONSTRAINT [FK__RelacioUs__UUID___0D7A0286]
GO
ALTER TABLE [dbo].[RelacioUserSda]  WITH CHECK ADD  CONSTRAINT [FK__RelacioUs__UUID___0E6E26BF] FOREIGN KEY([UUID_Sda])
REFERENCES [dbo].[Sda_Val] ([UUID])
GO
ALTER TABLE [dbo].[RelacioUserSda] CHECK CONSTRAINT [FK__RelacioUs__UUID___0E6E26BF]
GO
ALTER TABLE [dbo].[SaberCriteria_Pl]  WITH CHECK ADD  CONSTRAINT [FK_SaberCriteria_Pl_SabersDescription_Pl] FOREIGN KEY([UUID_SabersDescription])
REFERENCES [dbo].[SabersDescription_Pl] ([UUID])
GO
ALTER TABLE [dbo].[SaberCriteria_Pl] CHECK CONSTRAINT [FK_SaberCriteria_Pl_SabersDescription_Pl]
GO
ALTER TABLE [dbo].[SaberCriteria_Val]  WITH CHECK ADD  CONSTRAINT [FK_SaberCriteria_Val_SaberCriteria_Pl] FOREIGN KEY([UUID_SaberCriteria_Pl])
REFERENCES [dbo].[SaberCriteria_Pl] ([UUID])
GO
ALTER TABLE [dbo].[SaberCriteria_Val] CHECK CONSTRAINT [FK_SaberCriteria_Val_SaberCriteria_Pl]
GO
ALTER TABLE [dbo].[SaberCriteria_Val]  WITH CHECK ADD  CONSTRAINT [FK_SaberCriteria_Val_Sda_Val] FOREIGN KEY([UUID_Sda])
REFERENCES [dbo].[Sda_Val] ([UUID])
GO
ALTER TABLE [dbo].[SaberCriteria_Val] CHECK CONSTRAINT [FK_SaberCriteria_Val_Sda_Val]
GO
ALTER TABLE [dbo].[SabersDescription_Pl]  WITH CHECK ADD  CONSTRAINT [FK_SabersDescription_CompetencyName] FOREIGN KEY([UUID_CompetencyName])
REFERENCES [dbo].[CompetencyName_Pl] ([UUID])
GO
ALTER TABLE [dbo].[SabersDescription_Pl] CHECK CONSTRAINT [FK_SabersDescription_CompetencyName]
GO
ALTER TABLE [dbo].[SabersDescription_Val]  WITH CHECK ADD  CONSTRAINT [FK_SabersDescription_Val_SabersDescription_Pl] FOREIGN KEY([UUID_SabersDescription_Pl])
REFERENCES [dbo].[SabersDescription_Pl] ([UUID])
GO
ALTER TABLE [dbo].[SabersDescription_Val] CHECK CONSTRAINT [FK_SabersDescription_Val_SabersDescription_Pl]
GO
ALTER TABLE [dbo].[Sda_Val]  WITH CHECK ADD  CONSTRAINT [FK__Sda_Val__UUID_Group] FOREIGN KEY([UUID_Group])
REFERENCES [dbo].[GroupTable] ([UUID])
GO
ALTER TABLE [dbo].[Sda_Val] CHECK CONSTRAINT [FK__Sda_Val__UUID_Group]
GO
ALTER TABLE [dbo].[Sda_Val]  WITH CHECK ADD  CONSTRAINT [FK__Sda_Val__UUID_Pl__1332DBDC] FOREIGN KEY([UUID_Plantilla])
REFERENCES [dbo].[Plantilla_Pl] ([UUID])
GO
ALTER TABLE [dbo].[Sda_Val] CHECK CONSTRAINT [FK__Sda_Val__UUID_Pl__1332DBDC]
GO
ALTER TABLE [dbo].[Sda_Val]  WITH CHECK ADD  CONSTRAINT [FK_Sda_Val_Centre] FOREIGN KEY([UUID_Center])
REFERENCES [dbo].[Centre] ([UUID])
GO
ALTER TABLE [dbo].[Sda_Val] CHECK CONSTRAINT [FK_Sda_Val_Centre]
GO
ALTER TABLE [dbo].[Vectors_Pl]  WITH CHECK ADD  CONSTRAINT [FK__Vectors_P__UUID___14270015] FOREIGN KEY([UUID_Plantilla])
REFERENCES [dbo].[Plantilla_Pl] ([UUID])
GO
ALTER TABLE [dbo].[Vectors_Pl] CHECK CONSTRAINT [FK__Vectors_P__UUID___14270015]
GO
ALTER TABLE [dbo].[Vectors_Val]  WITH CHECK ADD  CONSTRAINT [FK__Vectors_V__UUID___151B244E] FOREIGN KEY([UUID_Sda])
REFERENCES [dbo].[Sda_Val] ([UUID])
GO
ALTER TABLE [dbo].[Vectors_Val] CHECK CONSTRAINT [FK__Vectors_V__UUID___151B244E]
GO
ALTER TABLE [dbo].[Vectors_Val]  WITH CHECK ADD  CONSTRAINT [FK_Vectors_Val_Vectors_Pl] FOREIGN KEY([UUID_Vectors_Pl])
REFERENCES [dbo].[Vectors_Pl] ([UUID])
GO
ALTER TABLE [dbo].[Vectors_Val] CHECK CONSTRAINT [FK_Vectors_Val_Vectors_Pl]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "cv"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 361
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cp"
            Begin Extent = 
               Top = 28
               Left = 486
               Bottom = 169
               Right = 745
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewCompetencyDescriptionVal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewCompetencyDescriptionVal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "cv"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 250
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cp"
            Begin Extent = 
               Top = 19
               Left = 330
               Bottom = 160
               Right = 625
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewCriteriaVal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewCriteriaVal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "cv"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 288
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cp"
            Begin Extent = 
               Top = 54
               Left = 385
               Bottom = 226
               Right = 669
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewSaberCriteriaVal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewSaberCriteriaVal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "cv"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 322
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "cp"
            Begin Extent = 
               Top = 175
               Left = 48
               Bottom = 316
               Right = 307
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewSabersDescriptionVal'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewSabersDescriptionVal'
GO
USE [master]
GO
ALTER DATABASE [Curricular2] SET  READ_WRITE 
GO
