<h1 id="home">Homework :clipboard:</h1>

## react-hw-01-components_ts

- 🇺🇸 [English](#en)
- 🇺🇦 [Ukrainian](#uk)
- 🇷🇺 [Russian](#ru)

---

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- The `react-hw-01-components` repository has been created.
- The components of all tasks are rendered on one page, inside a common container - the root
  component `<App>`.
- When submitting homework, there is a link to the repository with the source code of the project.
- In the header of the repository there is a link to the live page on `GitHub pages`.
- When visiting the working page (GitHub pages) of the task, there are no errors or warnings in the
  console.
- For each component, there is a separate folder with a React component file and a style file.
- props are described via `TypeScript`.
- Everything that the component expects in the form of props is passed to it when called.
- The names of the components are clear and descriptive.
- The JS code is clean and understandable, `Prettier` is used.
- Styling is done by `CSS modules` or `Styled Components`, so the classes in the resulting DOM will
  differ from the examples.
- Basic styling of the application is enough, first of all it should work, and only then be
  beautiful. Allocate 20% of time to CSS and 80% to JS.

# 1. Social network profile

We need to create a `<Profile>` component, with which we could display information about the social
network user. The user data is in the [user.json](./hw/social-profile/user.json) file.

![Profile component preview](./hw/social-profile/preview.png)

## Description of the `<Profile>` component

The component must accept several props with information about the user:

- `username` — username
- `tag` — tag in the social network without `@`
- `location` — city and country
- `avatar` — link to the image
- `stats` — an object with information about the activity

The component must create a DOM element of the following structure.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

## Usage example

```js
import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```

# 2. Statistics section

Create a `<Statistics>` component that would display statistics for the passed props. For example,
cloud uploads by file type, web page visits by users from different countries, financial expenses,
etc. The statistics data is in the [data.json](./hw/statistics/data.json.json) file.

![Statistics component preview](./hw/statistics/preview.jpg)

## Component description

The component must accept two props `title` and `stats`, which specify the title and statistics
object.

- `title` is optional, and if it is not passed, the `<h2>` header markup should not be rendered.
- `stats` is an array of objects containing information about the statistics element. It can have
  any number of elements.
- The background color of the statistics element in the design can be omitted, or a function can be
  created to generate a random color.

The component must create a DOM element of the following structure.

```html
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```

## Usage example

```js
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />;
```

# 3. Friends list

We need to create a `<FriendList>` component, with which we could display information about the
user's friends. Information about friends is stored in the file
[friends.json](./hw/friend-list/friends.json).

![Preview of the FriendList component](./hw/friend-list/preview.jpg)

## Description of the `<FriendList>` component

The component must accept one `friends` prop - an array of friends objects.

The component must create a DOM of the following structure.

```html
<ul class="friend-list">
  <!-- Arbitrary number of FriendListItem -->
</ul>
```

## Description of the `<FriendListItem>` component

The component must accept several props:

- `avatar` - a link to the avatar
- `name` - the friend's name
- `isOnline` - a boolean indicating the friend's status, whether online or not.

Depending on the `isOnline` prop, the background color of `span.status` must change. This can be
done through a different CSS class or Styled Components.

The component must create a DOM of the following structure.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

## Usage example

```js
import friends from 'path/to/friends.json';

<FriendList friends={friends} />,
```

# 4. Transaction history

It is necessary to create a transaction history component in the personal account of the Internet
bank.

![TransactionHistory component preview](./hw/transaction-history/preview.jpg)

The data for the list is available in JSON format in the
[transactions.json](./hw/transaction-history/transactions.json) file. This is an array of objects,
each object describes one transaction with the following properties:

- `id` — unique transaction identifier
- `type` — transaction type
- `amount` - transaction amount
- `currency` - currency type

## Description of the `<TransactionHistory>` component

You need to create a `<TransactionHistory>` component that accepts one prop `items` - an array of
transaction objects from `transactions.json`. The component creates the table markup. Each
transaction is a row in the table. The example shows the markup of two transactions.

```html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

## Usage example

```js
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```

---

---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерії прийому

- Створено репозиторій `react-hw-01-components`.
- Компоненти всіх завдань рендеруються на одній сторінці, усередині загального контейнера –
  кореневого компонента `<App>`.
- При здачі домашньої роботи є посилання на репозиторій із вихідним кодом проекту.
- У шапці репозиторію є посилання на живу сторінку на `GitHub pages`.
- При відвідуванні робочої сторінки (GitHub pages) завдання, в консолі немає помилок і попереджень.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом стилів.
- Пропс описані через `TypeScript`.
- Все, що компонент чекає у вигляді пропсів, передається йому при виклику.
- Імена компонентів зрозумілі, описові.
- JS-код чистий та зрозумілий, використовується `Prettier`.
- Стилізація виконана `CSS-модулями` або `Styled Components`, тому класи в результуючому DOM
  відрізнятимуться від прикладів.
- Достатньо базової стилізації додатка, насамперед він повинен працювати, а вже потім бути гарне.
  Виділяй 20% часу на CSS та 80% на JS.

# 1. Профіль соціальної мережі

Необхідно створити компонент `<Profile>`, за допомогою якого ми могли б відображати інформацію про
користувача соціальної мережі. Дані про користувача лежать у файлі
[user.json](./hw/social-profile/user.json).

![Перев'ю компонента Profile](./hw/social-profile/preview.png)

## Опис компоненту `<Profile>`

Компонент повинен приймати кілька пропсів з інформацією про користувача:

- `username` - ім'я користувача
- `tag` - тег у соціальній мережі без `@`
- `location` - місто та країна
- `avatar` - посилання на зображення
- `stats` - об'єкт з інформацією про активність

Компонент повинен створювати елемент DOM наступної структури.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

## Приклад використання

```js
import user from 'шлях/до/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```

# 2. Секція статистики

Створити компонет `<Statistics>`, який відображав би статистику за переданими пропам. Наприклад,
завантаження в хмару за типом файлів, відвідування веб-сторінки користувачами різних країн,
фінансові витрати тощо. Дані про статистику лежать у файлі
[data.json](./hw/statistics/data.json.json).

![Перев'ю компонента Statistics](./hw/statistics/preview.jpg)

## Опис компонента

Компонент повинен приймати два пропа `title` та `stats`, в яких вказується заголовок та об'єкт
статистики.

- `title` - не обов'язковий, і якщо він не переданий, не повинна рендеруватись розмітка заголовка
  `<h2>`.
- `stats` - масив об'єктів, що містять інформацію про елемент статистики. Може мати довільну
  кількість елементів.
- Колір фону елемента статистики в оформленні можна пропустити або створити функцію для створення
  випадкового кольору.

Компонент повинен створювати елемент DOM наступної структури.

```html
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```

## Приклад використання

```js
import data from '/шлях/до/data.json';

<Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />;
```

# 3. Список друзів

Необхідно створити компонент `<FriendList>`, за допомогою якого ми могли б відображати інформацію
про друзів користувача. Інформація про друзів зберігається в файл
[friends.json](./hw/friend-list/friends.json).

![Перев'ю компонента FriendList](./hw/friend-list/preview.jpg)

## Опис компоненту `<FriendList>`

Компонент повинен приймати один проп `friends` - масив об'єктів друзів.

Компонент повинен створювати DOM наступної структури.

```html
<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul>
```

## Опис компоненту `<FriendListItem>`

Компонент повинен приймати кілька пропов:

- `avatar` - посилання на аватар
- `name` - ім'я друга
- `isOnline` - буль, що сигналізує про стан друга, в мережі чи ні.

Залежно від пропа `isOnline`, повинен змінюватися колір фону `span.status`. Це можна зробити через
різні CSS-класи або Styled Components.

Компонент повинен створювати DOM наступної структури.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

## Приклад використання

```js
import friends from 'шлях/до/friends.json';

<FriendList friends={friends} />,
```

# 4. Історія транзакцій

Необхідно створити компонент історії транзакцій в особистому кабінеті інтернету банку.

![Перев'ю компонента TransactionHistory](./hw/transaction-history/preview.jpg)

Дані для списку доступні у форматі JSON у файлі
[transactions.json](./hw/transaction-history/transactions.json). Це масив об'єктів, кожен об'єкт
описує одну транзакцію з наступними властивостями:

- `id` - унікальний ідентифікатор транзакції
- `type` - тип транзакції
- `amount` - сума транзакції
- `currency` - тип валюти

## Опис компонента `<TransactionHistory>`

Необхідно створити компонент `<TransactionHistory>` приймає один проп `items` - масив об'єктів
транзакцій з `transactions.json`. Компонент створює таблиці розмітки. Кожна транзакція це рядок
таблиці. У прикладі наведено розмітка двох транзакцій.

```html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

## Приклад використання

```js
import transactions from 'шлях/до/transactions.json';

<TransactionHistory items={transactions} />;
```

---

---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3>

# Критерии приема

- Создан репозиторий `react-hw-01-components`.
- Компоненты всех заданий рендерятся на одной странице, внутри общего контейнера - корневого
  компонента `<App>`.
- При сдаче домашней работы есть ссылка на репозиторий с исходным кодом проекта.
- В шапке репозитория есть ссылка на живую страницу на `GitHub pages`.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и предупреждений.
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей.
- Пропс описаны через `TypeScript`.
- Все что компонент ожидает в виде пропсов, передается ему при вызове.
- Имена компонентов понятные, описательные.
- JS-код чистый и понятный, используется `Prettier`.
- Стилизация выполнена `CSS-модулями` или `Styled Components`, поэтому классы в результирующем DOM
  будут отличаться от примеров.
- Достаточно базовой стилизации приложения, в первую очередь оно должно работать, а уже потом быть
  красивое. Выделяй 20% времени на CSS и 80% на JS.

# 1. Профиль социальной сети

Необходимо создать компонент `<Profile>`, с помощью которого мы могли бы отображать информацию о
пользователе социальной сети. Данные о пользователе лежат в файле
[user.json](./hw/social-profile/user.json).

![Превью компонента Profile](./hw/social-profile/preview.png)

## Описание компонента `<Profile>`

Компонент должен принимать несколько пропсов с информацией о пользователе:

- `username` — имя пользователя
- `tag` — тег в социальной сети без `@`
- `location` — город и страна
- `avatar` — ссылка на изображение
- `stats` — объект с информацией об активности

Компонент должен создавать DOM элемент следующей структуры.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

## Пример использования

```js
import user from 'путь/к/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```

# 2. Секция статистики

Создать компонет `<Statistics>`, который бы отображал статистику по переданным пропам. Например,
загрузки в облако по типу файлов, посещение веб-страницы пользователями разных стран, финансовые
траты и т. п. Данные о статистике лежат в файле [data.json](./hw/statistics/data.json.json).

![Превью компонента Statistics](./hw/statistics/preview.jpg)

## Описание компонента

Компонент должен принимать два пропа `title` и `stats`, в которых указывается заголовок и объект
статистики.

- `title` - не обязателен, и если он не передан, не должна рендериться разметка заголовка `<h2>`.
- `stats` - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное
  кол-во элементов.
- Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации
  случайного цвета.

Компонент должен создавать DOM элемент следующей структуры.

```html
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```

## Пример использования

```js
import data from '/путь/к/data.json';

<Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />;
```

# 3. Список друзей

Необходимо создать компонент `<FriendList>`, с помощью которого мы могли бы отображать информацию о
друзьях пользователя. Информация о друзьях хранится в файле
[friends.json](./hw/friend-list/friends.json).

![Превью компонента FriendList](./hw/friend-list/preview.jpg)

## Описание компонента `<FriendList>`

Компонент должен принимать один проп `friends` - массив объектов друзей.

Компонент должен создавать DOM следующей структуры.

```html
<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul>
```

## Описание компонента `<FriendListItem>`

Компонент должен принимать несколько пропов:

- `avatar` - ссылка на аватар
- `name` - имя друга
- `isOnline` - буль сигнализирующий о состоянии друга, в сети или нет.

В зависимости от пропа `isOnline`, должен меняться цвет фона `span.status`. Это можно сделать через
разный CSS-класс или Styled Components.

Компонент должен создавать DOM следующей структуры.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

## Пример использования

```js
import friends from 'путь/к/friends.json';

<FriendList friends={friends} />,
```

# 4. История транзакций

Необходимо создать компонент истории транзакций в личном кабинете интернет банка.

![Превью компонента TransactionHistory](./hw/transaction-history/preview.jpg)

Данные для списка доступны в формате JSON в файле
[transactions.json](./hw/transaction-history/transactions.json). Это массив объектов, каждый объект
описывает одну транзакцию со следующими свойствами:

- `id` — уникальный идентификатор транзакции
- `type` — тип транзакции
- `amount` - сумма транзакции
- `currency` - тип валюты

## Описание компонента `<TransactionHistory>`

Необходимо создать компонент `<TransactionHistory>` принимающий один проп `items` - массив объектов
транзакций из `transactions.json`. Компонент создает разметку таблицы. Каждая транзакция это строка
таблицы. В примере приведена разметка двух транзакций.

```html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

## Пример использования

```js
import transactions from 'путь/к/transactions.json';

<TransactionHistory items={transactions} />;
```
