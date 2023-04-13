
import './App.css'
import Card from 'react-bootstrap/Card';

function App() {

  const person = [
    { id: '1', name: 'Fortunate' },
    { id: '2', name: 'Asanda' },
    { id: '3', name: 'Thozama' },
    { id: '4', name: 'Siyanda' },
    { id: '5', name: 'Sibongile' },
    { id: '6', name: 'Reginal' },
    { id: '7', name: 'Tshepo' },
    { id: '8', name: 'Bonke' },
    { id: '9', name: 'Sonke' },
    { id: '10', name: 'Bathande' },
    { id: '12', name: 'Nkosivumile' },
    { id: '13', name: 'Melusi' },
    { id: '14', name: 'Thembani' },
  ]

  return (
    <>
      <div>
        <h1>Staff PWD 2022</h1>
        <div class="grid-container">
          {
            person.map(staff => {

              return (

                <div key={staff.id} className="card" >
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{staff.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>








    </>

  );
}

export default App
