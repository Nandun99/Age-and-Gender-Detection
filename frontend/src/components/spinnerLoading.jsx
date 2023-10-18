import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="border-t border-gray-200" id="wait-section">
      <div
        className="
                    flex flex-col
                    items-center
                    justify-center
                    space-x-2
                    bg-white
                  "
        style={{ height: 440 }}>
        <h6
          className="
                      font-medium
                      leading-tight
                      text-base
                      mt-0
                      mb-2
                      text-blue-600
                    ">
          Waiting for an Image upload...
        </h6>
        <div>
          <div
            style={{ borderTopColor: "transparent" }}
            className="
                        w-16
                        h-16
                        border-4 border-blue-400 border-solid
                        rounded-full
                        animate-spin
                      "></div>
        </div>
      </div>
    </div>
  );
}
