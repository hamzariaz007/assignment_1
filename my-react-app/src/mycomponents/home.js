import React from 'react'

const home = () => {
  return (
    <div>
       <header class='header'>
       <nav class='navbar'>
           <div class="container">
                <h1 class='logo lg-heading text-light'>WT</h1>
                <ul class='nav-items'>
                   <li class="nav-item"><a href="./index.html">Home</a></li>
                   <li class="nav-item"><a href="./about.html">About</a></li>
                   <li class="nav-item"><a href="./contact.html">Contact</a></li>
                </ul>
           </div>
       </nav>
        <div class="header-content">
            <h1 class='lg-heading text-light main-heading'>travel the world</h1>
            <p class='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
            <a href="#" class='btn btn-primary text-red md-heading'>Explore Places</a>
        </div>
    </header>

    <section class='showcase'>
        <div class="container">
            <div class="row row1">
                <div class="img-box">
                    <img src="./img/showcase-photo3.jpg" alt="Image Description"/>
                </div>
                <div class="text-box">
                    <h2 class='lg-heading text-black'>DEGANVY, U.K</h2>
                    <p class='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?</p>
                    <a href="./about.html" class='btn btn-secondary'>More</a>
                </div>
            </div>
            <div class="row row2">
                <div class="img-box">
                    <img src="./img/showcase-photo1.jpg" alt="Image Description"/>
                </div>
                <div class="text-box">
                    <h2 class='lg-heading text-black'>DESERT, EGYPT</h2>
                    <p class='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.</p>
                    <a href="./about.html" class='btn btn-secondary'>More</a>
                </div>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <div class="box-wrapper">
                <div class="box box-1">
                    <i class="fas fa-route fa-2x text-red"></i>
                    <h2 class="md-heading">Adventure</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div class="box box-2">
                    <i class="fas fa-strikethrough fa-2x"></i>
                    <h2 class="md-heading">Less Price</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div class="box box-3">
                    <i class="fas fa-user-check fa-2x text-red"></i>
                    <h2 class="md-heading">Experice</h2>    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
            </div>
        </div>
        
    </section>

    <footer class='footer'>
        <div class="social-media-links">
            <i class="fab fa-facebook fa-4x"></i>
            <i class="fab fa-twitter fa-4x"></i>
            <i class="fab fa-instagram fa-4x"></i>
        </div>
        <p>World Travel &copy; 2020, All Rights Reserved</p>
    </footer>
    </div>
  )
}

export default home
