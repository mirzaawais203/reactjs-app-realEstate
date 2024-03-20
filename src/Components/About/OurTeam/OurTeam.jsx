import './OurTeam.css'

const OurTeam = () => {
    return (
        <>
            <div className='ourteam-top'>
                <h3>
                    OUR TEAM
                </h3>
                <div className='ourteam-top-cards'>
                    <div className='ourteam-top-card' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <img src="./AboutPhotos/OurTeam/1.jpg" alt="pic" />
                        <div className='ourteam-top-card1'>
                            <h5>Major General <br /> Nasrullah Tahir Dogar
                                <sub className='ourteam-top-card-sub'>(Retd)</sub>
                            </h5>
                            <p style={{paddingTop:'21px'}}>DIRECTOR</p>
                        </div>
                    </div>
                    <div className='ourteam-top-card'>
                        <img src="./AboutPhotos/OurTeam/2.png" alt="pic" />
                        <div>
                            <h5>Mahmood ul Haq</h5>
                            <p>DIRECTOR</p>
                        </div>
                    </div>
                    <div className='ourteam-top-card' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <img src="./AboutPhotos/OurTeam/3.png" alt="pic" />
                        <div style={{paddingTop:'21px'}}>
                            <h5>Muhammad Ehsan Dogar</h5>
                            <p>DIRECTOR</p>
                        </div>
                    </div>
                    <div className='ourteam-top-card'>
                        <img src="./AboutPhotos/OurTeam/4.png" alt="pic" />
                        <div>
                            <h5>Salman</h5>
                            <p>ENGINEER</p>
                        </div>
                    </div>
                    <div className='ourteam-top-card'>
                        <img src="./AboutPhotos/OurTeam/5.png" alt="pic" />
                        <div>
                            <h5>Umna Nabi</h5>
                            <p>HR</p>
                        </div>
                    </div>
                    <div className='ourteam-top-card'>
                        <img src="./AboutPhotos/OurTeam/6.png" alt="pic" />
                        <div>
                            <h5>Talha Imtiaz</h5>
                            <p>ARCHITECT</p>
                        </div>
                    </div>
                    <div className='ourteam-top-card'>
                        <img src="./AboutPhotos/OurTeam/7.png" alt="pic" />
                        <div>
                            <h5>Sadam Hussain</h5>
                            <p>ARCHITECT</p>
                        </div>
                    </div>
                    <div className='ourteam-top-card'>
                        <img src="./AboutPhotos/OurTeam/8.png" alt="pic" />
                        <div>
                            <h5>Arslan Aslam</h5>
                            <p>ARCHITECT</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='ourteam-bottom'>
                <h3>AFFILIATE TEAM</h3>
                <div className='ourteam-bottom-cards'>
                    <div className='ourteam-bottom-card'>
                        <img src="./AboutPhotos/OurTeam/9.png" alt="" />
                        <div>
                            <h5>Sidra Hussain</h5>
                            <p>HILIGHTER</p>
                        </div>
                    </div>
                    <div className='ourteam-bottom-card'>
                        <img src="./AboutPhotos/OurTeam/10.png" alt="" />
                        <div>
                            <h5>Naveed</h5>
                            <p style={{textTransform:'uppercase'}}>Avenew Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam



// <div className='ourteam-bottom-card'>
//     <img src="./AboutPhotos/OurTeam/11.png" alt=""  />
//     <div>
//         <h5>Anything</h5>
//         <p>HILIGHTER</p>
//     </div>
// </div>
