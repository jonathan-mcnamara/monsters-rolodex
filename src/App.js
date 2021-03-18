import './App.css';
import { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search.box.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');

  const initialValues = Object.values(monsters).join('');
  // above from Wes Bos

  const fetchData = async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(() => users));
  };

  useEffect(() => {
    fetchData();
    console.log(monsters);
  }, [initialValues]);

  console.log('search: ', search);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log('filter', filteredMonsters);

  return (
    <>
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(term) => setSearch(term.target.value)}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    </>
  );
}

export default App;

// const users = await (
//   await fetch('https://jsonplaceholder.typicode.com/users')
// ).json();
// setMonsters(() => users);
