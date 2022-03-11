import React from 'react';
import './device_img.scss';

const device_img = () => {
  return (
    <div className="devices__container">
        <div className="phone">
            <div className="notch"></div>
            <div className="ctr">
                <div className="header"></div>
                <div className="content">
                    <div className="txt"></div>
                    <div className="txt"></div>
                    <div className="txt"></div>
                    <div className="txt small"></div>
                </div>
            </div>
            <div className="button"></div>
        </div>
        <div className="pc">
            <div className="screen">
                <div className="ctr">
                    <div className="top"></div>
                    <div className="bottom">
                        <div className="content bottomOne"><div className="header"></div><div className="txt"></div><div className="txt"></div></div>
                        <div className="content botomTwo"><div className="header"></div><div className="txt"></div><div className="txt"></div></div>
                        <div className="content bottomThree"><div className="header"></div><div className="txt"></div><div className="txt"></div></div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="body"></div>
                <div className="stand"><div className="neck"></div><div className="base"></div></div>
            </div>
        </div>
        <div className="tablet">
            <div className="ctr">
                <div className="header"></div>
                <div className="content">
                    <div className="row">
                        <div className="left"></div>
                        <div className="right">
                            <div className="txt large"></div>
                            <div className="txt medium"></div>
                            <div className="txt small"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="right">
                            <div className="txt large"></div>
                            <div className="txt medium"></div>
                            <div className="txt small"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left"></div>
                        <div className="right">
                            <div className="txt large"></div>
                            <div className="txt medium"></div>
                            <div className="txt small"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button"></div>
        </div>
    </div>
  )
}

export default device_img