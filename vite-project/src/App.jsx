import './components/Navbar'
import './App.css'
import Navbar from './components/Navbar'
import CY from './assets/cy.jpeg'

function App() {

  const Facilitator=[
    {id:'0',text: 'a testimonial from CY , who is in our Facilitator IT System Support',image:CY },
  ]

  const person = [
    { id: '1', text: 'a testimonial from Fortunate , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/991593926463062116/1034004984200691752/IMG_20220825_222843.jpg'  },
    { id: '2', text: 'a testimonial from Asanda, who is in our IT System Support',image:'https://media.discordapp.net/attachments/1096078548026019990/1096078653667942410/WhatsApp_Image_2023-04-13_at_16.19.09.jpeg?width=330&height=621'  },
    { id: '3', text: 'a testimonial from Thozama , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/1021684832922779648/1021685470616371240/IMG_20220920_085931.jpg' },
    { id: '4', text: 'a testimonial from Siyanda , who is in our IT System Support' ,image:'https://cdn.discordapp.com/attachments/1075738938821595188/1096319383757922334/Picture_of_Siyanda.png'},
    { id: '5', text: 'a testimonial from Sibongile , who is in our IT System Support' ,image:'https://cdn.discordapp.com/attachments/1021684832922779648/1021685444792041472/IMG_20220920_085751.jpg'},
    { id: '6', text: 'a testimonial from Reginah , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/1021684832922779648/1021685547468587079/IMG_20220920_085647.jpg' },
    { id: '7', text: 'a testimonial from Tshepo , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/994851596112502837/1044508435259076758/IMG_6848.jpg' },
    { id: '8', text: 'a testimonial from Bonke , who is in our IT System Support' ,image:'https://cdn.discordapp.com/attachments/1096068491288776896/1096069590561329302/IMG-20230413-WA0003.jpg'},
    { id: '9', text: 'a testimonial from Sonke , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/1096058165172391956/1096075408224563220/IMG-20230413-WA0026.jpg' },
    { id: '10', text: 'a testimonial from Bathande , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/1096055379567333446/1096055670777851914/18A7E0EE-2168-47A5-A1E6-2070DBF0A52C.jpg' },
    { id: '11', text: 'a testimonial from Nkosivumile , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/1096068491288776896/1096069111085281351/IMG-20230413-WA0002.jpg' },
    { id: '12', text: 'a testimonial from Melusi , who is in our IT System Support' ,image:'https://cdn.discordapp.com/attachments/1096068491288776896/1096068968080482405/Screenshot_20230413_154551.jpg'},
    { id: '13', text: 'a testimonial from Mbuyiselo , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/1096058730480668782/1096059357894029373/IMG_20230203_123756.jpg' },
    { id: '14', text: 'a testimonial from Thembani , who is in our IT System Support',image:'https://cdn.discordapp.com/attachments/1096056243568779284/1096057082073067572/Screenshot_2023-04-13_145726.png ' },
  ]

  return (
    <>
      <div>
        <Navbar />


        <h1>Staff PWD 2022</h1>

        <div key={Facilitator.id} className="card"  id='cardFacil'>
                  <img src={Facilitator[0].image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{Facilitator[0].text}</p>
                  </div>
        </div>
        
        <div className="grid-container">
          {
            person.map(staff => {

              return (

                <div key={staff.id} className="card" >
                  <img src={staff.image} className="card-img-top" alt="..." />
                  <div className="card-body">
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
