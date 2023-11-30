# React: From Implementation to Deployment

## Installation

```bash
npm run install
```

## Run Server

```bash
npm run dev
```

## Create docker image

```bash
docker build -t garciadiazjaime/nextjs-docker .
```

## Docker Login

```bash
docker login
```

## Run docker instance

```bash
docker run -d -p 3000:3000 garciadiazjaime/nextjs-docker
```

## Push docker image

```bash
docker push garciadiazjaime/nextjs-docker
```
