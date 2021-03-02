FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /src

COPY ./OregonTilth.Models ./OregonTilth.Models
COPY ./OregonTilth.EFModels ./OregonTilth.EFModels
COPY ./OregonTilth.API ./OregonTilth.API

RUN dotnet publish ./OregonTilth.API/OregonTilth.API.csproj -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:5.0-focal AS final
WORKDIR /app
COPY --from=build /app /app
RUN ls -la
EXPOSE 80
ENTRYPOINT ["dotnet", "OregonTilth.API.dll"]
