import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(){
        super()
        this.state = {
            likes:0
        }
    }

    clickLike = () =>{
        this.setState({
            likes:this.state.likes +1
        })
    }
    clickLike2 = () =>{
        this.setState({
            likes:this.state.likes +1
        })
    }
    clickLike3 = () =>{
        this.setState({
            likes:this.state.likes +1
        })
    }
    render() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light navv">
  <a class="navbar-brand menu" href="#"><img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598930092/logo_airk2n.jpg" alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li class="nav-item menu">
        <a style={{color:"white"}} class="nav-link" href="#"><strong className="gal">CHANNELS</strong></a>
      </li>
      <li class="nav-item menu">
        <a style={{color:"white"}} class="nav-link" href="#"><strong className="gal">SHOWS</strong></a>
      </li>
      <li class="nav-item menu">
        <a style={{color:"white"}} class="nav-link" href="#"><strong className="gal">MOVIES</strong></a>
      </li>
      <li class="nav-item menu">
        <a style={{color:"white"}} class="nav-link" href="#"><strong className="gal">VOTE</strong></a>
      </li>
      <li class="nav-item menu">
        <a style={{color:"white"}} class="nav-link" href="#"><strong className="gal">GALLERY</strong></a>
      </li>
      <li class="nav-item dropdown dropmenu">
        <a style={{color:"white"}} class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><strong className="gal">CONTACT US</strong></a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

            <div className="container" style={{paddingTop:"20px"}}>
                <div className="row">
                    <div className="col-3">
                        <div className="card" style={{backgroundColor:"red"}} style={{width:"50%"}}>
                            <img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598917796/erica_yhtmgc.jpg" style={{width:"99%"}} className="cadr-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"><strong>Erica</strong></p> 
                        </div>
                        
                        <button className="btn-info" style={{width:"55%"}} onClick={this.clickLike}>Vote</button>
                        <small className="card-text">{this.state.likes}</small>


                    </div>
                </div>

                <div className="col-3">
                        <div className="card" style={{backgroundColor:"red"}} style={{width:"50%"}}>
                            <img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598926314/images_2_jfaeia.jpg" style={{width:"99%"}} className="cadr-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"><strong>Nengi</strong></p> 
                        </div>
                        
                        <button className="btn-info" style={{width:"55%"}} onClick={this.clickLike}>Vote</button>
                        <small className="card-text">{this.state.likes}</small>


                    </div>
                </div>

                <div className="col-3">
                        <div className="card" style={{backgroundColor:"red"}} style={{width:"50%"}}>
                            <img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598926314/images_eqiptl.jpg" style={{width:"99%"}} className="cadr-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"><strong>Kiddwaya</strong></p> 
                        </div>
                        
                        <button className="btn-info" style={{width:"55%"}} onClick={this.clickLike}>Vote</button>
                        <small className="card-text">{this.state.likes}</small>


                    </div>
                </div>

                <div className="col-3">
                        <div className="card" style={{backgroundColor:"red"}} style={{width:"50%"}}>
                            <img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598926887/download_grdy4s.jpg" style={{width:"99%"}} className="cadr-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"><strong>Ozo</strong></p> 
                        </div>
                        
                        <button className="btn-info" style={{width:"55%"}} onClick={this.clickLike}>Vote</button>
                        <small className="card-text">{this.state.likes}</small>


                    </div>
                </div>

                <div className="col-3">
                        <div className="card" style={{backgroundColor:"red"}} style={{width:"50%"}}>
                            <img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598926314/images_1_gsurlj.jpg" style={{width:"99%"}} className="cadr-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"><strong>Lucy</strong></p> 
                        </div>
                        
                        <button className="btn-info" style={{width:"55%"}} onClick={this.clickLike}>Vote</button>
                        <small className="card-text">{this.state.likes}</small>


                    </div>
                </div>

                <div className="col-3">
                        <div className="card" style={{backgroundColor:"red"}} style={{width:"50%"}}>
                            <img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598926314/JHBpHicA_sihojo.jpg" style={{width:"99%"}} className="cadr-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"><strong>Dorathy</strong></p> 
                        </div>
                        
                        <button className="btn-info" style={{width:"55%"}} onClick={this.clickLike}>Vote</button>
                        <small className="card-text">{this.state.likes}</small>


                    </div>
                </div>

                <div className="col-3">
                        <div className="card" style={{backgroundColor:"red"}} style={{width:"50%"}}>
                            <img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598926314/12195748_bbnaija2020ifiseehiminreallifeiwilltellhimheiswickedtrikyteehasamessageforebuka_webp_webp1507a804ce9bdab50b27e34cc6938e1d_ygxyrc.webp" style={{width:"99%"}} className="cadr-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"><strong>Trikytee</strong></p> 
                        </div>
                        
                        <button className="btn-info" style={{width:"55%"}} onClick={this.clickLike}>Vote</button>
                        <small className="card-text">{this.state.likes}</small>


                    </div>
                </div>


                <div className="col-3">
                <div className="card" style={{width: "18rem;"}} style={{width:"50%"}}>
                            <img src="https://res.cloudinary.com/ddhuwol3r/image/upload/v1598927049/1_B-Rm7s8WRwwZw_RnenAcrA_jpdcmw.jpg" style={{width:"99%"}} className="cadr-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"><strong>Laycon</strong></p> 
                        </div>
                        <button className="btn-info" style={{width:"55%"}} onClick={this.clickLike2}>Vote</button>
                        <small className="card-text">{this.state.likes}</small>
                    </div>
                    
                </div>

                
        </div>

    </div>

</div>

        );
    }
}

export default App 

