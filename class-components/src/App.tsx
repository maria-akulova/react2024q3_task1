import { Component } from 'react';
import { Animal, InputSearch, ResultSearch, Spinner } from './components/index.ts';
import './App.css';
import api from './services/api.ts';

interface AppState {
  animals: Animal[];
  loading: boolean;
}

class App extends Component {
  state: AppState = {
    animals: [],
    loading: false,
  };

  componentDidMount() {
    const previousSearch = localStorage.getItem('search');
    previousSearch ? this.getAnimals(previousSearch) : this.getAnimals('');
  }

  getAnimals = async (searchTerm: string) => {
    this.setState({ loading: true });
    await api
      .getAnimals(searchTerm)
      .then((res) => {
        this.setState({ animals: res.animals, loading: false });
      })
      .catch((err) => {
        console.error('Failed to fetch animals', err);
        this.setState({ loading: false });
      });
  };

  handleClick = () => {
    throw new Error('Test error');
  };

  render() {
    const { animals, loading } = this.state;

    return (
      <>
        <h1 className="header">Animals</h1>
        <InputSearch onSearch={this.getAnimals} />
        <button className="errorButton" onClick={this.handleClick}>
          Throw Test Error
        </button>
        {loading ? <Spinner /> : <ResultSearch animals={animals} />}
      </>
    );
  }
}

export default App;
