import logo from './logo.svg';
import './App.css';
import './app1.css';
import theImge from './avataaars.svg';
import theImge1 from './img/cabin.png';
import theImge2 from './img/circus.png';
import theImge3 from './img/cake.png';
import theImge4 from './img/game.png';
import theImge5 from './img/safe.png';
import theImge6 from './img/submarine.png';
import { Component } from 'react';
// export default class parent extends
// Component {
//   state ={
 
//     $(window).scroll(function () {
//       console.log('hello')
      
//     }
    
//     );

//   }
// }








function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
  <div className="container">
    <a className="navbar-brand" href="#">START REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link text-light " aria-current="page" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className  ="nav-link text-light" href="#">CONTACT</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

<div className='home'>
  <img src={theImge} className='img ' id='imeg'/>
  <h1>START REACT</h1>
  <div className='bord1'>
  <div className='bord'></div>
  <div className='icon'><i class="fa-solid fa-star"></i></div>
  <div className='bord'></div>
  </div>
  <h4>Graphic Artist - Web Designer - Illustrator</h4>

</div>


<section>
        <div id="Portfolio" className="mt-5 container">
          <div className="pt-5 text-center">
            <h1>PORTFOLIO</h1>
            <div className="line-icons">
              <div className="divider-custom-lines"></div>
              <div className="divider-custom-icons">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="divider-custom-lines"></div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4">
              <div className="mb-5 tran0">
                <div className="tran">
                  <img src={theImge1} className=" card-img-top"></img>
                  <div class="inner">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="  mb-5 tran0">
                <div className="tran">
                  <img src={theImge2} className=" card-img-top"></img>
                  <div class="inner">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="mb-5 tran0">
                <div className="tran">
                  <img src={theImge3} className=" card-img-top"></img>
                  <div class="inner">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="mb-5 tran0">
                <div className="tran">
                  <img src={theImge4} className=" card-img-top"></img>
                  <div class="inner">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="mb-5 tran0">
                <div className="tran">
                  <img src={theImge5} className="card-img-top"></img>
                  <div class="inner">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="mb-5 tran0">
                <div className="tran">
                  <img src={theImge6} className="card-img-top"></img>
                  <div class="inner">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='About'>
        <h2>ABOUT</h2>
        <div className='bord1'>
  <div className='bord'></div>
  <div className='icon'><i class="fa-solid fa-star"></i></div>
  <div className='bord'></div>
  </div>
  <div className=' container'>
    <div className='row '>
      <div className='col-3 offset-3'>
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS,
      and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className='col-3'>
      <p>You can create your own custom avatar for the masthead, change the icon in the dividers,
      and add your email address to the contact form to make it fully functional!</p>
      </div>
    </div>
  </div>
      </div>

<div className='CONTACT'>
  <h2>CONTACT ME</h2>
  <div className="line-icons">
              <div className="divider-custom-lines"></div>
              <div className="divider-custom-icons">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="divider-custom-lines"></div>
            </div>

            <div className="form-floating mb-3 w-50 border-bottom pt-4 m-auto">
  <input type="text" className="form-control  border-white" id="floatingInput" placeholder="Name"/>
  <label for="floatingInput">Name</label>
</div>
<div className="form-floating mb-3  w-50 pt-4 border-bottom m-auto">
  <input type="email" className="form-control  border-white" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3  w-50 pt-4 border-bottom m-auto">
  <input type="Namber" className="form-control  border-white" id="floatingInput" placeholder="namber"/>
  <label for="floatingInput">Phone</label>
</div>
<div className="form-floating mb-3  w-50 pt-4 border-bottom m-auto">
  <input type="Text" className="form-control  border-white" id="floatingInput" placeholder="Message"/>
  <label for="floatingInput">Message</label>
</div>
<button type="button" className="btn">Send</button>
</div>

<div className='foot'>
  <div className=' cotainer '>
  <div className=' row '>
    <div className='col-4'>
      <h2>
      LOCATION
      </h2>
      <h5>2215 John Daniel Drive <br/>
Clark, MO 65243</h5>
    </div>
    <div className='col-4'>
      <h2>
      AROUND THE WEBB
      </h2>
<div className='row'>
<div className='ico offset-3'><i class="fa-brands fa-facebook-f"></i></div>
<div className='ico'><i class="fa-brands fa-twitter"></i></div>
<div className='ico'><i class="fa-brands fa-linkedin-in"></i></div>
<div className='ico'><i class="fa-solid fa-basketball"></i></div>
</div>
</div>
    
    <div className='col-4'>
      <h2>
      ABOUT FREELANCER
      </h2>
<h5>Freelance is a free to use, MIT<br/> licensed Bootstrap theme created by<br/> Route</h5>
    </div>

  </div>
  </div>

  </div>
  <div className='fot'>
    <p>Copyright © Your Website 2021</p>
  </div>

    </div>
  );
}

export default App;
