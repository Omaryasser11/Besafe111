import { Link } from "react-router-dom";

 function DiseaseTypes(){

 return(
    <div className="disease col-12" >
    <div className="headerSection-disease">
      <div className="header">
        <h4>Consult top doctors online for any health concern</h4>
        <span>Private online consultations with verified doctors in all specialists</span>

      </div>
      <button > <a href="">view AllSpechalities</a></button>

    </div>
    <div className="card-disease" id="card1">
      <div className="Image-disease" id="Image-diseaseOne">
      </div>
      <div className="disease-proplem">
        <h6>peripod doupts or
          Pregnancy</h6>
        <Link to="/" className="link-consult">Consult Now</Link>
      </div>

    </div>
    <div className="card-disease" id="card2" >
      <div className="Image-disease" id="Image-diseaseTwo">

      </div>
      <div className="disease-proplem">
        <h6>peripod doupts or
          Pregnancy</h6>
        <Link to="/" className="link-consult">Consult Now</Link>
      </div>

    </div>
    <div className="card-disease" id="card3">
      <div className="Image-disease" id="Image-diseaseThree">

      </div>
      <div className="disease-proplem">
        <h6>peripod doupts or
          Pregnancy</h6>
        <Link to="/" className="link-consult">Consult Now</Link>
      </div>
    </div>
    <div className="card-disease" id="card4">
      <div className="Image-disease" id="Image-diseaseFour">

      </div>
      <div className="disease-proplem">
        <h6>peripod doupts or
          Pregnancy</h6>
        <Link to='/' className="link-consult">Consult Now</Link>
      </div>

    </div>
    <div className="card-disease" id="card5">
      <div className="Image-disease" id="Image-diseaseFive">

      </div>
      <div className="disease-proplem">
        <h6>peripod doupts or
          Pregnancy</h6>
        <Link to="/" className="link-consult">Consult Now</Link>
      </div>
    </div>
    <div className="card-disease" id="card6">
      <div className="Image-disease" id="Image-diseaseSex">

      </div>
      <div className="disease-proplem">
        <h6>peripod doupts or
          Pregnancy</h6>
        <Link to="/" className="link-consult">Consult Now</Link>
      </div>
    </div>


  </div>
 );










 }
 export default DiseaseTypes;