# Используем официальный образ Node.js
FROM node:alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Открываем порт, на котором будет работать сервер
EXPOSE 1337

# Запускаем сервер
CMD ["npm", "start"]
