import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        Your Todo's
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Feed cat</td>
              <td>Eric</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Get haircut</td>
              <td>Eric</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
