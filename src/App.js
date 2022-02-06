// import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
import Data from './data.json'



function App() {

//     let item=[];
//    item= Data.map((item)=> <Card titleText={item.title} desText={item.desc}/>);

    return (

<div>
    <h1 className='Headertext'> My Call Schedule </h1>



    <div class="div1 shdow">


<h2 class="message">
</h2>

</div>

<p id="DD"> </p>



        {Data.map((item)=> <Card titleText={item.title} desText={item.desc} time={item.time}/>)}

        <footer>
        <a href="https://www.facebook.com/adventureTime007 " target="blank "> <i class=" fa-2x p-2 text-danger fab fa-facebook-square "></i> </a>

        <a href="https://www.facebook.com/adventureTime007 " target="blank "> <i class=" fa-2x p-2 text-danger fab fa-twitter-square "></i> </a>

        <a href="https://github.com/aminul-islam-niloy " target="blank "> <i class=" fa-2x p-2 text-center text-danger fab fa-github-square "></i> </a>


        <a href="https://www.instagram.com/aminul_islam_122/ " target="_blank "> <i class=" fa-2x p-2 text-center text-danger fab fa-instagram-square "></i> </a>
        <br/>
        <small> Aminul Islam NIloy </small>
    </footer>
    
</div> );
}

export default App;
