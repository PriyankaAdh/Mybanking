USE [master]
GO
/****** Object:  Database [MyBankingDB]    Script Date: 7/2/2022 7:19:38 AM ******/
CREATE DATABASE [MyBankingDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MyBankingDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MyBankingDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MyBankingDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MyBankingDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MyBankingDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MyBankingDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MyBankingDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MyBankingDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MyBankingDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MyBankingDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MyBankingDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [MyBankingDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MyBankingDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MyBankingDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MyBankingDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MyBankingDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MyBankingDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MyBankingDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MyBankingDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MyBankingDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MyBankingDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MyBankingDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MyBankingDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MyBankingDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MyBankingDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MyBankingDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MyBankingDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MyBankingDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MyBankingDB] SET RECOVERY FULL 
GO
ALTER DATABASE [MyBankingDB] SET  MULTI_USER 
GO
ALTER DATABASE [MyBankingDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MyBankingDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MyBankingDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MyBankingDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MyBankingDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MyBankingDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'MyBankingDB', N'ON'
GO
ALTER DATABASE [MyBankingDB] SET QUERY_STORE = OFF
GO
USE [MyBankingDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 7/2/2022 7:19:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 7/2/2022 7:19:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounts](
	[ClientId] [varchar](50) NOT NULL,
	[ClientName] [varchar](50) NOT NULL,
	[AccountBalance] [money] NOT NULL,
 CONSTRAINT [PK_Accounts] PRIMARY KEY CLUSTERED 
(
	[ClientId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [MyBankingDB] SET  READ_WRITE 
GO
