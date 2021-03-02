FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /src

COPY ./Fresca.Models ./Fresca.Models
COPY ./Fresca.EFModels ./Fresca.EFModels
COPY ./Fresca.API ./Fresca.API

RUN dotnet publish ./Fresca.API/Fresca.API.csproj -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:5.0-focal AS final
WORKDIR /app
COPY --from=build /app /app
RUN ls -la
EXPOSE 80
ENTRYPOINT ["dotnet", "Fresca.API.dll"]
