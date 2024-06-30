import React, { Component } from "react";
import { BiImageAdd } from "react-icons/bi";
import { BiCamera } from "react-icons/bi";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: "",
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    let self = this;
    ev.preventDefault();
    self.props.setIsLoading(1);

    const data = new FormData();
    console.log(this.uploadInput.files[0]);
    data.append("file", this.uploadInput.files[0]);

    this.props.onImage(URL.createObjectURL(ev.target.files[0]));
    this.props.setMedia(0);

    fetch("http://a37a-34-143-228-87.ngrok.io/predict", {
      method: "POST",
      body: data,
    }).then((response) => {
      response.text().then(function(text) {
        self.props.onSet(text);
        self.props.setIsLoading(0);
      });
    });
  }

  render() {
    return (
      <div className="flex content-center justify-center">
        <span
          className="hidden sm:block"
          style={{ display: this.props.hideUpload ? "none" : "block" }}>
          <form id="upload-file">
            <label
              for="imageUpload"
              className="
                      inline-flex
                      items-center
                      px-4
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      text-sm
                      font-medium
                      text-gray-700
                      bg-white
                      hover:bg-gray-50
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-indigo-500
                    ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-1 mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Upload
            </label>
            <input
              ref={(ref) => {
                this.uploadInput = ref;
              }}
              type="file"
              id="imageUpload"
              onChange={this.handleUploadImage}
              name="file"
              className="hidden"
              accept=".png, .jpg, .jpeg"
            />
          </form>
        </span>
        <span className="hidden sm:block ml-3">
          <button
            style={{ display: this.props.media ? "none" : "block" }}
            type="submit"
            onClick={this.props.onCam}
            id="use_webcam"
            className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    rounded-md
                    shadow-sm
                    text-sm
                    font-medium
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-1 mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
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
            Use Webcam
          </button>
        </span>
      </div>
    );
  }
}

export default Image;
