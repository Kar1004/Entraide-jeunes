
import './CardEntraide.scss'
import './CardEntraide.scss'



 function CardEntraide(props) {

 




 
  return (
  
    <div class="card text-center">
  <div class="card-header">
   <p class="text-title"> {props.type }</p>
  </div>
  <div class="card-body">
    <p class="card-title text-light ">{props.message}</p>
    <p class="card-text text-justify"></p>
    <a href="#" class="btn btn-outline-red ">💓</a>
  </div>
  <div class="card-footer text-muted">
    <div className="creator">{props.pseudo}</div>
    <div className="date"></div>
  </div>
</div>

  );
}
export default CardEntraide