import React from 'react';
import { SketchPicker } from 'react-color';
import FontPicker from "font-picker-react";
import { toPng, toSvg } from 'html-to-image';
import download from 'downloadjs';
import './App.css';

export default class Component extends React.Component {
  state = {
    displayColorPickerGradient: false,
    displayColorPickerBorder: false,
    activeFontFamily: "Open Sans",
    fontSize: 200,
    hasBorder: true,
    borderWidth: 4,
    borderColor: '#fff',
    medalionColor: '#52057F',
  };

  handleSavePng = () => { 
    toPng(document.getElementById('medalion'))
      .then(function (dataUrl) {
        download(dataUrl, 'medalion.png');
      });
  }

  // handleSaveSvg = () => {
  //   toSvg(document.getElementById('medalion'))
  //     .then(function (dataUrl) {
  //       download(dataUrl, 'medalion.svg');
  //     });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <div style={{
            height: '400px',
            width: '200px',
            backgroundColor: 'yellow',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}> */}
            <div 
            id='medalion'
            style={{
              height: '400px',
              width: '200px',
              background: `linear-gradient(${this.state.medalionColor}, #1B191E)`,
              borderRadius: '200px',
              border: this.state.hasBorder ? 'solid' : 'none',
              borderWidth: `${this.state.borderWidth}px`,
              borderColor: this.state.borderColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div 
              contenteditable="true"
              className="apply-font"
              style={{
                fontSize: `${this.state.fontSize}px`
              }}>
                N
              </div>
            </div>
          {/* </div> */}
          <br />
          <div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{
              flex: 1,
              marginRight: '20px',
            }}>Color</div>
            <div>
              <div style={{
                flex: 1,
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              }} onClick={ () =>
                this.setState({ displayColorPickerGradient: !this.state.displayColorPickerGradient })
              }>
                <div style={{
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: this.state.medalionColor,
              }} />
              </div>
              { this.state.displayColorPickerGradient ? <div style={{
                  position: 'absolute',
                  zIndex: '2',
                }}>
                <div style={{
                  position: 'fixed',
                  top: '0px',
                  right: '0px',
                  bottom: '0px',
                  left: '0px',
                }} onClick={ () =>
                  this.setState({ displayColorPickerGradient: false })
                }/>
                <SketchPicker color={ this.state.medalionColor } onChange={
                  (color) => this.setState({ medalionColor: color.hex })
                } />
              </div> : null }
            </div>
          </div>
          <div style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{
              flex: 1,
              marginRight: '20px',
            }}>Font Family</div>
            <FontPicker
                apiKey="AIzaSyCrOwwQKcQB-8Kn1Tth3ACOhex0nf9tAj0"
                activeFontFamily={this.state.activeFontFamily}
                onChange={(nextFont) =>
                  this.setState({
                      activeFontFamily: nextFont.family,
                  })
                }
            />
          </div>
          <div style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{
              flex: 1,
              marginRight: '20px',
            }}>Font Size</div>
            <input type="number" min={0} max={1000} value={this.state.fontSize} 
              onChange={(e) =>
                this.setState({
                  fontSize: e.target.value,
                })
              }
            />
          </div>
          <div style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{
              flex: 1,
              marginRight: '20px',
            }}>Enable Border</div>
            <input type="checkbox" 
              checked={this.state.hasBorder}
              onChange={(e) =>
                this.setState({
                  hasBorder: !this.state.hasBorder,
                })
              }
            />
          </div>
          <div style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{
              flex: 1,
              marginRight: '20px',
            }}>Border Width</div>
            <input type="number" min={0} max={40} value={this.state.borderWidth} 
              onChange={(e) =>
                this.setState({
                  borderWidth: e.target.value,
                })
              }
            />
          </div>
          

          <div style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{
              flex: 1,
              marginRight: '20px',
            }}>Border Color</div>
            <div>
              <div style={{
                flex: 1,
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              }} onClick={ () =>
                this.setState({ displayColorPickerBorder: !this.state.displayColorPickerBorder })
              }>
                <div style={{
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: this.state.medalionColor,
              }} />
              </div>
              { this.state.displayColorPickerBorder ? <div style={{
                  position: 'absolute',
                  zIndex: '2',
                }}>
                <div style={{
                  position: 'fixed',
                  top: '0px',
                  right: '0px',
                  bottom: '0px',
                  left: '0px',
                }} onClick={ () =>
                  this.setState({ displayColorPickerBorder: false })
                }/>
                <SketchPicker color={ this.state.borderColor } onChange={
                  (color) => this.setState({ borderColor: color.hex })
                } />
              </div> : null }
            </div>
          </div>


          <div style={{
            marginTop: '12px',
          }}>
            <button onClick={this.handleSavePng}>
              Save as png
            </button>
            {/* <button onClick={this.handleSaveSvg}>
              Save as svg
            </button> */}
          </div>
        </header>
      </div>
    );
  }
}