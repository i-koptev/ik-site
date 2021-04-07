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
