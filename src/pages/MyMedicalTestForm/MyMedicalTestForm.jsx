import MedicalTestImg from"../../assets/addoh_hero.jpg";
import '../MyMedicalTestForm/MyMedicalTestForm.scss'
function MyMedicalTestForm(){



    return(

        <div className="col-12 MyMedicalTestForm-Container">


        <div className=" col-12  col-md-10 col-lg-6  MedicalTestImg" >
        
        <img src={MedicalTestImg} className="Img"></img>
        
        </div>
        
        
             
        <div  className="formContainer col-9 col-md-7 col-lg-5">
        
            <form className="form-control-Test col-10 col-md-9">
        
            <label for="MyMedicalTest" className="MyMedicalTest">upload your Medical test</label>
            <input type="file" id="myMedicalTest" name="MyMedicalTest"  className="MyMedicalTest-File"/>
            <label for="MyComment" className="MyComment"> My Comment</label>
            <textarea id="MyComment" name="MyComment" rows="4" className="myComment-Input" placeholder="My Comment.... "></textarea>
        
            <input type="Submit" className="btn-Upload" /> 
        
        
        
        
        </form>
        
        
        
        
        
        
        
        </div>
             
        
        
        
        
        
        </div>
        
        
        
        












    )






}
export default MyMedicalTestForm