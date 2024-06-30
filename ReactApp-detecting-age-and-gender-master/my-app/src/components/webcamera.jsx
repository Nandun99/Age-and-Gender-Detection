import React, { Component } from "react";
import Webcam from "react-webcam";
import Image from "./image";
import "../index.css";

class WebCamera extends Component {
  state = {
    hideBtns: false,
  };

  render() {
    const videoConstraints = {
      width: { min: 500 },
      height: { min: 400 },
      facingMode: "user",
      aspectRatio: 0,
    };

    return (
      <div
        className=" 
    border-4 border-dashed border-gray-200
    rounded-lg
    px-3
    py-5
    sm:min-w-full
    my-2"
        style={{ overflow: "hidden" }}
      >
        <Webcam
          audio={false}
          height={720}
          width={1280}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <center>
              <div className="containerBtn mt-4 flex content-center justify-center ">
                <span className="sm:block ml-3">
                  <Image
                    onSet={this.props.getData}
                    onImage={this.props.showImage}
                    setMedia={this.props.setMedia}
                    onCam={this.props.selectCam}
                    setIsLoading={this.props.loading}
                    webcam={this.props.getImage}
                    handleUploadImage={this.props.handleUploadImage}
                    media={this.props.media}
                    hideUpload={this.state.hideBtns}
                  />
                </span>
                <span className="hidden sm:block ml-3 ">
                  <button
                    style={{ display: this.state.hideBtns ? "none" : "block" }}
                    onClick={(ev) => {
                      this.setState({ hideBtns: true });
                      this.intervalId = setInterval(() => {
                        const imageSrc = getScreenshot();
                        this.props.handleUploadImage(ev, imageSrc, 0);
                      }, 1000);
                    }}
                    id="take_snap"
                    type="button"
                    className=" hideBtns
                    inline-flex items-center px-4 py-2 border
                    text-gray-900 bg-white  border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm  mr-2 mb-2  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1 mr-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Video
                  </button>
                </span>
                <span className="hidden sm:block ml-3">
                  <button
                    onClick={(ev) => {
                      this.setState({ hideBtns: false });
                      clearInterval(this.intervalId);
                    }}
                    style={{ display: !this.state.hideBtns ? "none" : "block" }}
                    className=" inline-flex items-center px-4 py-2 border
                    border-gray-300 rounded-md shadow-sm text-sm
                    font-medium text-white bg-red-500
                    hover:bg-red-300 focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-indigo-500 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1 mr-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Stop
                  </button>
                </span>
                <span className="hidden sm:block ml-3">
                  <button
                    onClick={(ev) => {
                      const imageSrc = getScreenshot();
                      clearInterval(this.intervalId);

                      this.props.handleUploadImage(ev, imageSrc, 1);
                    }}
                    style={{ display: this.state.hideBtns ? "none" : "block" }}
                    id="take_snap"
                    type="button"
                    className="
                  inline-flex items-center px-4 py-2 border
                  border-gray-300 rounded-md shadow-sm text-sm
                  font-medium text-white bg-red-500
                  hover:bg-red-300 focus:outline-none focus:ring-2
                  focus:ring-offset-2 focus:ring-indigo-500 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1 mr-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Take Photo
                  </button>
                </span>
              </div>
            </center>
          )}
        </Webcam>
      </div>
    );
  }
}

export default WebCamera;
