# Dcard - Junior Web Frontend Developer Take Home Test 
+ Author： Viggo Chang
+ E-mail： <gl4cj8686@gmail.com> 

## Getting Started
#### Backend
+ 進入 server 資料夾，使用 `node server.js` 啟動伺服器。
+ 伺服器將於 `localhost: 5000` 執行。
#### Frontend
+ 進入 my-app 資料夾，使用 `npm start` 執行 react app。
+ 請確認在 5000 以外的 port 執行。

## Architecture
#### Fetch data
+ 使用 `express.js` 架設後端，向第三方 API 拿取資料。
+ 接受前端 request，method 為 `GET`，endpoint 為 `list`，前端的 request 將帶著最後一篇文章的 id 作為 `query`。
+ 回傳給前端的 response，設定 header `Access-Control-Allow-Origin` 為 `*`，允許非同源的資料傳輸。

#### UI conponent
+ 建立 `Article.js` 元件，呈現文章標題及摘要。
+ 建立 `Container.js` 元件，為文章列表中的每筆資料，建立一個 Article 元件，以文章 id 為 `key` 值。

#### Infinite scroll
+ 監聽 `scroll` 事件，判斷是否滑到網頁底部。
+ 滑到底部時立即取消監聽，並向後端發出請求，取得新的文章資料。
+ 取得資料後再重新綁定監聽。

#### others
+ 避免重複發送 API 請求
  + 監聽事件觸發後，立即取消監聽，避免重複向後端發出 request。
+ 避免不必要的畫面渲染
  + 僅使用 `useState` 儲存文章列表資料，取得新資料後進行畫面渲染。 
  + 使用 `useRef` 儲存最後一筆文章的 id，向後端發出 request 時作為 query 一併送出，更新 useRef 時不會造成畫面重新渲染。

