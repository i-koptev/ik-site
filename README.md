Сайт-портфолио на [Next.js](https://koptef.com/), утилита начального формирования - [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Начало работы

Ресурсы для изучения:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

# Журнал разработки

```bash
$ nvm install 14.16.0
$ nvm use 14.16.0

$ mkdir ik-site
$ cd ik-site
$ npx create-next-app .
```

## Переносим на Гитхаб

На Github cоздаём новый пустой репозиторий - "ik-site"

Локально из папки проекта:

```bash
$ git remote add origin https://github.com/i-koptev/ik-site.git
$ git branch -M main
$ git push -u origin main
```

## Чистка и создание файлов настроек

Удаляем ненужные папки и файлы

```bash
$ rm -rf ./styles
$ rm -rf /pages/api
```

Копируем из предыдущего проекта файлы настроек

```bash
$ touch .nvmrc
$ touch .eslintrc.json
$ touch .prettierrc
$ touch .prettierignore
```

## Material-UI

```bash
$ yarn add @material-ui/core
$ yarn add @material-ui/icons
```

Если возникают проблемы с сетью:

```bash
$ yarn add @material-ui/icons --network-timeout 1000000
```

Поддержка Typescript - используем компоненты Material-UI на Typescript

```bash
$ touch tsconfig.json
$ yarn add --dev typescript @types/node @types/react @types/react-dom

```

По руководствам настраиваем поддержку Material UI в NextJS.

Github mui-org/material-ui https://github.com/mui-org/material-ui/tree/master/examples/nextjs
Next.js with Material-UI- https://itnext.io/next-js-with-material-ui-7a7f6485f671

```bash
$ rm _app.js
$ touch _app.tsx
$ touch _document.tsx
$ touch theme.ts
```
