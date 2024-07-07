import { Component } from 'react';
import { Animal, InputSearch, ResultSearch } from './components/index.ts';
import './App.css';
import api from './services/api.ts';
import { Spinner } from './components/spinner/Spinner.tsx';

interface AppState {
  animals: Animal[];
  loading: boolean;
}

class App extends Component {
  state: AppState = {
    animals: [],
    loading: true,
  };

  componentDidMount() {
    this.getAnimals();
  }

  async getAnimals() {
    await api
      .getAnimals()
      .then((res) => {
        this.setState({ animals: res.animals, loading: false });
      })
      .catch((err) => {
        console.error('Failed to fetch animals', err);
        this.setState({ loading: false });
      });
  }

  render() {
    const { animals, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        <h1 className="header">Animals</h1>
        <InputSearch />
        <ResultSearch animals={animals} />
      </>
    );
  }
}

export default App;
