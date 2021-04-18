import React from "react";
import './Dropdown.css';


const Dropdown = () => {
    return (
        <>


<nav class="drop">
<div class="container-fluid" id="main_nav">
  <ul class="navbar-nav">
    <li class="nav-item dropdown" id="myDropdown">
      <a class="drop_header" href="#"  data-bs-toggle="dropdown"> All </a>
      <ul class="dropdown-menu">
        <li> <a class="dropdown-item" href="#"> CSE &raquo; </a>
        <ul class="submenu dropdown-menu">
				    <li><a class="dropdown-item" href="#"> SEM-I &raquo; </a>
            <ul class="submenu dropdown-menu">
				    <li><a class="dropdown-item" href="#"> BOOKS </a></li>
				    <li><a class="dropdown-item" href="#">NOTES </a></li>
				    <li><a class="dropdown-item" href="#"> Question Bank  </a></li>
				 </ul>
            
            </li>


				    <li><a class="dropdown-item" href="#">SEM-II </a></li>


				    <li><a class="dropdown-item" href="#">SEM-III </a></li>


            <li><a class="dropdown-item" href="#">SEM-IV </a></li>


				    <li><a class="dropdown-item" href="#">SEM-V </a></li>


				    <li><a class="dropdown-item" href="#">SEM-VI </a></li>


            <li><a class="dropdown-item" href="#">SEM-VII </a></li>


				    <li><a class="dropdown-item" href="#">SEM-VIII </a></li>


				 </ul>

        </li>


        <li> <a class="dropdown-item" href="#"> MECH &raquo; </a>

        </li>

        <li> <a class="dropdown-item" href="#"> CE &raquo; </a>
       
        </li>


        <li> <a class="dropdown-item" href="#"> EEE &raquo; </a>

        </li>


        <li> <a class="dropdown-item" href="#"> IT &raquo; </a>
       
        </li>


        <li> <a class="dropdown-item" href="#"> ECE &raquo; </a>

        </li>

        <li> <a class="dropdown-item" href="#"> Polytechnic &raquo; </a>

        </li>

        <li> <a class="dropdown-item" href="#"> GATE &raquo; </a>
       
        </li>
          

      </ul>
    </li>
    
  </ul>
</div>


</nav>


<nav class="drop">
<div class="container-fluid" id="main_nav">
  <ul class="navbar-nav">
    <li class="nav-item dropdown" id="myDropdown">
      <a class="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown"> Books </a>
      <ul class="dropdown-menu">
        <li> <a class="dropdown-item" href="#"> CSE </a>
       
        </li>


        <li> <a class="dropdown-item" href="#"> MECH </a>

        </li>

      


        <li> <a class="dropdown-item" href="#"> CE </a>

        </li>
          

      </ul>
    </li>
    
  </ul>
</div>


</nav>


<nav class="drop">
<div class="container-fluid" id="main_nav">
  <ul class="navbar-nav">
    <li class="nav-item dropdown" id="myDropdown">
      <a class="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown"> Questions Bank </a>
      <ul class="dropdown-menu">
        <li> <a class="dropdown-item" href="#"> CSE </a>
       
        </li>


        <li> <a class="dropdown-item" href="#"> MECH </a>

        </li>

      


        <li> <a class="dropdown-item" href="#"> CE </a>

        </li>
          

      </ul>
    </li>
    
  </ul>
</div>


</nav>


        

        </>
    );
}
export default Dropdown;