import '../panner/panner.scss'
import img1 from "../../assets/Landing.png"
function Panner() {
     return (
          <>
               <div className='panner-container col-12'>
                    <div className="panner col-10 ">
                    <div className='col-7 pannerText'>
                         <h1>BeSafe: Safety tools and support for confident patient navigation</h1>
                        
                         <button className='btn-join'>
                              join Now !
                         </button>
                    </div>
                 <img className='col-5' src={img1} alt="" />
           
                    </div>
                   
               </div>
          </>
     )
}
export default Panner;