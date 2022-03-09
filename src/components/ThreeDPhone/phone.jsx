import React from 'react';
import {images} from '../../constants';
import './phone.scss';
import {GiPaintBucket} from 'react-icons/gi';
import {MdBatteryCharging80,MdOutlineWifi,MdSignalCellularAlt,MdHome,MdNotifications,MdOutlineSearch,MdVideoLibrary,MdDevices, MdAttachEmail,MdPalette,MdFaceRetouchingNatural,MdOutlineUpdate,MdHistory,MdWbSunny,MdCloudDownload} from 'react-icons/md';

const phone = () => {
  return (
    <div className="phone__container">
        <div className="phone__body">
            <div className="glass"> 
                <div className="notch"></div>
                <div className="cutOut one"><span><GiPaintBucket/></span><p>Change<br/>Color</p></div>
                <div className="cutOut two"><span><MdCloudDownload/></span><p>Cloud<br/>Download</p></div>
                <div className="cutOut three"><span><MdDevices/></span><p>Responsive<br/>Design</p></div>
                <div className="lg-cutOut">
                    <div className="line"><div className="icon"><span><MdWbSunny/></span></div><div className="name">Brightness</div></div>
                    <div className="line"><div className="icon"><span><MdHistory/></span></div><div className="name">History</div></div>
                </div>
                <div className="bottom-window one"><img src={images.mobile_devices} alt="man sitting at a computer"/><p>Mobile Friendly</p></div>
                <div className="bottom-window two"><img src={images.man_at_computer} alt="man sitting at a computer"/><p>Available 24/7</p></div>
            </div>
            <div className="base">
                <div className="timeDate">
                    <div className="clock">3:15</div>
                    <div className="date">Tuesday, February 15</div>
                </div>
                <div className="top">
                    <span><MdSignalCellularAlt/></span>
                    <span><MdOutlineWifi/></span>
                    <span><MdBatteryCharging80 id = 'battery'/></span>
                </div>
                <div className="bottom">
                    <span><MdHome/></span>
                    <span><MdOutlineSearch/></span>
                    <span><MdNotifications/></span>
                    <span><MdVideoLibrary/></span>
                </div>
                <div className="home-bar"></div>
            </div>
            <div className="side-screen">
                <div className="section">
                    <div className="circle"><span><MdAttachEmail/></span></div>
                    <div className="text">
                        <h6 className="heading">Feel Free To Contact Me</h6>
                        <p className="content"> I do tutorials and E-learning.<br/>Any questions just ask!.</p>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="section">
                    <div className="circle"><span><MdPalette/></span></div>
                    <div className="text">
                        <h6 className="heading">Custom Coded Images</h6>
                        <p className="content">I love coding my own images. It makes my sites more personal!</p>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="section">
                    <div className="circle"><span><MdFaceRetouchingNatural/></span></div>
                    <div className="text">
                        <h6 className="heading">Unique Designs</h6>
                        <p className="content">No two websites are the same. Expect a site unique to you.</p>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="section">
                    <div className="circle"><span><MdOutlineUpdate/></span></div>
                    <div className="text">
                        <h6 className="heading">Milestone Updates</h6>
                        <p className="content">I keep you updated on your website.</p>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default phone