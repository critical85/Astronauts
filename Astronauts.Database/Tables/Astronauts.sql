CREATE TABLE [dbo].[Astronauts]
(
	[AstronautId]	INT				IDENTITY (1, 1)										NOT NULL,
	[FirstName]		NVARCHAR(100)														NOT NULL,	
	[LastName]		NVARCHAR(100)														NOT NULL,
	[BirthDate]		DATETIME															NOT NULL,
	[Superpower]	NVARCHAR(100)														NOT NULL,	
	[IsDeleted]		BIT				CONSTRAINT [DF_Astronaut_IsDeleted] DEFAULT ((0))	NOT NULL,

	CONSTRAINT [PK_Astronauts] PRIMARY KEY CLUSTERED ([AstronautId] ASC)
)
