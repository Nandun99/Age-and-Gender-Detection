import React, { Component } from "react";

class TakePhoto extends Component {
  render() {
    return (
      <span className="hidden sm:block ml-3 ">
        <button
          onClick={(ev) => {
            const imageSrc = getScreenshot();
            this.props.handleUploadImage(ev, imageSrc);
          }}
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
    );
  }
}

export default TakePhoto;
