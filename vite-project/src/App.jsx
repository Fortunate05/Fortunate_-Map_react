import './component/Navbar'
import './App.css'
import Navbar from './component/Navbar'

function App() {

  const person = [
    { id: '1', name: 'Fortunate', text: 'she is hardworking' },
    { id: '2', name: 'Asanda', text: 'she is hardworking' },
    { id: '3', name: 'Thozama', text: '' },
    { id: '4', name: 'Siyanda', text: '' },
    { id: '5', name: 'Sibongile', text: '' },
    { id: '6', name: 'Reginal', text: '' },
    { id: '7', name: 'Tshepo', text: '' },
    { id: '8', name: 'Bonke', text: '' },
    { id: '9', name: 'Sonke', text: '' },
    { id: '10', name: 'Bathande', text: '' },
    { id: '12', name: 'Nkosivumile', text: '' },
    { id: '13', name: 'Melusi', text: '' },
    { id: '14', name: 'Thembani', text: '' },
  ]

  return (
    <>
      <div>
        <Navbar />


        <h1>Staff PWD 2022</h1>
        <div class="grid-container">
          {
            person.map(staff => {

              return (

                <div key={staff.id} className="card" >
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{staff.name}</h5>
                    <p className="card-text">{staff.text}</p>
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
