


function Card(props){
    const{titleText,desText,time}=props;
    return <div  className="Card"> 
    
     <h3  className="CardTitile">{titleText}</h3>
     <p  className="CardPera"> You can call: {desText}  </p>
       <p  className="Cardfooter"> Time: {time} </p>
    </div>
}

export default Card;
