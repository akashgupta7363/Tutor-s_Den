
import './landingheader.css';

function LandingHeader() {
    return(
        <>
             <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="/education.png
                         " alt="Logo" width="50px" height="40px" class="d-inline-block align-text-top"/>
                        <span className='logo-den'>Den</span> 
                     </a>
                     <b>Login</b>
                </div>
            </nav>

                <div className="container" style={{height:"90vh"}}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 p-5 main-heading">
                          <div><span style={{fontSize:"4rem"}}>Hey there</span><br />
                            Welcome to <br />
                            Tuitor's <span className="den">Den</span>
                           </div>
                           <p>An online platform where Teachers and <br/>students connect...</p>
                         <button className="register">Register</button>
                         <button className="about">About Us</button>
                    </div>
                   
                    <div className="col-sm-12 col-md-6 illustration-container">
                        <img src="/illustration.svg
                           
                         "  className="img-fluid  p-5" alt="Logo" />
                    </div>
                </div>
                </div>
                </div>

              
            
        </>
    );
}

export default LandingHeader;