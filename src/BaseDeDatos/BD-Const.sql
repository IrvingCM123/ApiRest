USE Construccion
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Usuarios]') AND type in (N'U'))
DROP TABLE [dbo].[Usuarios]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Informacion]') AND type in (N'U'))
DROP TABLE [dbo].[Informacion]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE Usuarios(
IDUsuario INT IDENTITY NOT NULL,
Nombre_Usuario VARCHAR(30) NOT NULL,
Apellido_Usuario VARCHAR(40) NOT NULL,
Correo_Electronico VARCHAR(40) PRIMARY KEY NOT NULL CHECK(Correo_Electronico LIKE('%@gmail.com')),
Contrase�a VARCHAR(500) NOT NULL,
Fecha_Creacion DATETIME NULL,
Fecha_Baja DATETIME NULL
);
GO

CREATE TABLE InformacionGlosario(
IdPalabra INT IDENTITY,
Letra VARCHAR(1) NOT NULL,
Titulo VARCHAR(30) NOT NULL,
Descripcion VARCHAR(300) NOT NULL,
Imagen VARCHAR(MAX) NOT NULL
);
GO

CREATE TABLE Cursos(
NombreCurso VARCHAR(40),
ImagenCurso VARCHAR(MAX),
Descripcion VARCHAR(200)
);

CREATE TABLE Imagenes(
Pesta�a VARCHAR(30),
Imagen VARCHAR(MAX)
)

CREATE TABLE CursoProgramacion(
IdTema INT PRIMARY KEY,
NombreTema VARCHAR(40),
Informacion VARCHAR(MAX),
Imagen VARCHAR(MAX)
)

IF OBJECT_ID('Registrar') IS NOT NULL
	DROP PROCEDURE dbo.Registrar;
GO

CREATE PROCEDURE [dbo].[Registrar]
@Nombre VARCHAR(30),
@Apellido VARCHAR(40),
@Correo_Electronico VARCHAR(40),
@Contrase�a VARCHAR(100)
AS
BEGIN
	IF (SELECT COUNT(*) FROM Usuarios AS U WHERE UPPER(@Correo_Electronico) = UPPER(U.Correo_Electronico) ) > 0
		BEGIN
			RAISERROR('El usuario ya existe! Tonto Unu', 16, 1);
		END 

	BEGIN TRANSACTION
		BEGIN TRY

		DECLARE @Contrase�aCifrada VARBINARY(500)
		SET @Contrase�aCifrada = ENCRYPTBYPASSPHRASE(UPPER(@Nombre), @Contrase�a);

		INSERT INTO Usuarios (Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contrase�a, Fecha_Creacion) 
		VALUES (@Nombre, @Apellido, @Correo_Electronico, @Contrase�aCifrada, GETDATE());

		IF @@TRANCOUNT > 0
			COMMIT TRANSACTION

	END TRY

	BEGIN CATCH

		SELECT ERROR_MESSAGE() AS Mensaje_Error, ERROR_NUMBER() AS Numero_Error;

		PRINT('La transacci�n ha sido un fracaso');

		IF @@TRANCOUNT > 0
			 ROLLBACK TRANSACTION

	END CATCH
END
GO

IF OBJECT_ID('Mostrar_Contrase�a') IS NOT NULL
	DROP PROCEDURE Mostrar_Contrase�a
GO

CREATE PROCEDURE Mostrar_Contrase�a
@Correo VARCHAR(40)
AS
BEGIN
	
	IF (SELECT COUNT(*) FROM Usuarios AS U WHERE UPPER(U.Correo_Electronico) = UPPER(@Correo) ) = 0
		RAISERROR ('La cuenta no existe', 16, 1)
	
	SELECT U.Correo_Electronico AS Correo, CONVERT(VARCHAR(500), DECRYPTBYPASSPHRASE(UPPER(U.Nombre_Usuario), U.Contrase�a)) AS Contrase�a FROM Usuarios AS U WHERE UPPER(U.Correo_Electronico) = UPPER(@Correo)
END

GO

IF OBJECT_ID('BajaCliente') IS NOT NULL
DROP PROCEDURE BajaCliente

GO

CREATE PROCEDURE BajaCliente
@Correo VARCHAR(40),
@Contrase�a VARCHAR(100)
AS
BEGIN
	
	IF (SELECT COUNT(*) FROM Usuarios AS U WHERE U.Correo_Electronico = @Correo) = 0
		BEGIN
			RAISERROR( 'El correo no existe, tonto ',16,1);
		END

	BEGIN TRANSACTION

	BEGIN TRY

	DECLARE @Contrase�aClara VARCHAR(100);

	SELECT @Contrase�aClara = CONVERT(VARCHAR(500), DECRYPTBYPASSPHRASE(UPPER(U.Nombre_Usuario), U.Contrase�a)) FROM Usuarios AS U WHERE UPPER(U.Correo_Electronico) = UPPER(@Correo)


	IF (SELECT COUNT(*) FROM Usuarios AS U WHERE U.Contrase�a = @Contrase�aClara) = 0
		BEGIN
			RAISERROR('La contrase�a no coincide', 16, 1);
		END

	IF (SELECT COUNT(*) FROM Usuarios AS U WHERE (U.Fecha_Baja IS NOT NULL) AND (U.Correo_Electronico = @Correo)) = 0
		BEGIN
			RAISERROR('La cuenta ya ha sido dada de baja', 16, 1)
		END

	UPDATE Usuarios
	SET Fecha_Baja = GETDATE(),
	Fecha_Creacion = NULL;
	
	PRINT ('El cliente ha sido dado de baja con �xito');

	IF @@TRANCOUNT > 0
		COMMIT TRANSACTION

	END TRY

	BEGIN CATCH

		SELECT ERROR_MESSAGE() AS Mensaje_Error, ERROR_NUMBER() AS Numero_Error;

		PRINT('La transacci�n ha sido un fracaso');

		IF @@TRANCOUNT > 0
			ROLLBACK TRANSACTION

	END CATCH

END


EXEC Mostrar_Contrase�a @Correo = 'Irving@gmail.com'

EXEC Registrar @Nombre = 'Irving' , @Apellido = 'Conde', @Correo_Electronico = 'Irving@gmail.com', @Contrase�a = 'micontrase�a'

EXEC BajaCliente @Correo = 'Prueba2@gmail.com', @Contrase�a = 'Contrase�a2'

SELECT * FROM Usuarios


