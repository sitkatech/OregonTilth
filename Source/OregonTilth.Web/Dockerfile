FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src

ENV NODE_VERSION 16.15.1
ENV NODE_DOWNLOAD_SHA f78a49c0c9c2f546c3a44eb434c49a852125441422a1bcfc433dedc58d6a241c

RUN curl -SL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz" --output nodejs.tar.gz \
    && echo "$NODE_DOWNLOAD_SHA nodejs.tar.gz" | sha256sum -c - \
    && tar -xzf "nodejs.tar.gz" -C /usr/local --strip-components=1 \
    && rm nodejs.tar.gz \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs

    
COPY OregonTilth.Web/                        ./OregonTilth.Web

RUN dotnet restore OregonTilth.Web/OregonTilth.Web.csproj

RUN dotnet build ./OregonTilth.Web/OregonTilth.Web.csproj -c Release -o /app
WORKDIR /src/OregonTilth.Web/

RUN npm cache clean --force
RUN npm uninstall   -g angular-cli
RUN npm install     -g @angular/cli@13.3.11
RUN npm ci

ARG env
RUN npm run build-${env}

FROM build AS publish
RUN dotnet publish OregonTilth.Web.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "OregonTilth.Web.dll"]
