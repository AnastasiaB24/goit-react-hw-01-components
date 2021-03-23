// App.js - главный компонент (обертка) создаваемого приложения;
// Компоненты обязательно называются с большой буквы. В одном файл - прописываем работу только одного компонента;
// компонент - это функция, куда мы закидываем настроийки, а на выходе получаем Virtual DOM, который потом рендерится в настоящий DOM.

import React from "react"; //обзятельно import React  в каждый файл, чтобы использовать JSX и он мог  скомпилироваться и транспайлиться

// Components
import Profile from "./components/Profile"; // 1. Profile
import Statistics from "./components/Statistics"; //2. Statistics

import userData from "./user.json";
import statisticalData from "./statistical-data.json";

function App() {
  return (
    <div className="App">
      <h1>homework-01</h1>
      {/* 1. рендерим и вставляем часть кода */}
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
