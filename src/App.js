import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return (monster.name.toLocaleLowerCase().includes(searchField));
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;