import React, { Component } from "react";
import dataURItoBlob from "datauritoblob";
class Feedback extends Component {
  state = {
    success: 0,
    actualGender: "",
    actualAge: "",
    predictedAge: this.props.predictAge1,
    predictedGender: this.props.predictGender,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }
  alert = () => {
    // this.setState({ success: 1 });
  };

  setGender = (event) => {
    this.setState({ actualGender: event.target.value });
  };
  setAge = (event) => {
    this.setState({ actualAge: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createFormData();
  };

  createFormData = () => {
    let self = this;
    console.log(this);
    var formData = new FormData();
    formData.append("predictedAge", this.props.predictAge1);
    formData.append("predictedGender", this.props.predictGender);
    formData.append("actualGender", this.state.actualGender);
    formData.append("actualAge", this.state.actualAge);
    console.log(this.props.predictAge1);
    const file = dataURItoBlob(this.props.image);
    formData.append("image", file, "image.jpg");
    console.log(this.props.image);

    console.log("4");
    fetch("http://127.0.0.1:5000/add-student", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.text().then(function(text) {
        self.setState({ success: 1 });
      });
    });
  };

  render() {
    return (
      <div>
        {(() => {
          if (this.state.success == 1) {
            return (
              <div
                className="
                  bg-green-100
                  rounded-lg
                  py-5
                  px-6
                  mb-3
                  my-3
                  text-base text-green-700
                  inline-flex
                  items-center
                  w-full
                "
                role="alert"
                id="sucess_alert">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="check-circle"
                  className="w-4 h-4 mr-2 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                Feedback Sucessfully Submitted
              </div>
            );
          } else {
            return (
              <div
                className="shadow overflow-hidden sm:rounded-lg my-3"
                id="feedback">
                <div className="bg-slate-500 px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-white">
                    Submit Feedback
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-white">
                    Send feedback to compare results
                  </p>
                </div>

                <form onSubmit={this.handleSubmit}>
                  <dl>
                    <div
                      className="
            bg-gray-700
            px-4
            py-5
            sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
          ">
                      <dt className="text-sm font-medium text-gray-500">
                        <label
                          for="email-address"
                          className="block text-sm font-medium text-white">
                          Actual Age
                        </label>
                      </dt>
                      <dd className="sm:mt-0 sm:col-span-2">
                        <input
                          onChange={this.setAge}
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                p-2
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
                        />
                      </dd>
                    </div>

                    <div
                      className="
            bg-gray-700
            px-4
            py-5
            sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
          ">
                      <dt className="text-sm font-medium text-gray-500">
                        <label
                          for="email-address"
                          className="block text-sm font-medium text-white">
                          Actual Gender
                        </label>
                      </dt>
                      <dd className="sm:mt-0 sm:col-span-2">
                        <input
                          onChange={this.setGender}
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                p-2
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
                        />
                      </dd>
                    </div>

                    <div
                      className="
            bg-gray-700
            px-4
            py-5
            sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
          ">
                      <dt className="text-sm font-medium text-gray-500">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="
                    focus:ring-indigo-500
                    h-4
                    w-4
                    text-indigo-600
                    border-gray-300
                    rounded
                  "
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              for="comments"
                              className="font-medium text-white">
                              Save Image
                            </label>
                            <p className="text-gray-500">
                              Give Permission to save photo in Database
                            </p>
                          </div>
                        </div>
                      </dt>
                      <dd className="sm:mt-0 sm:col-span-2"></dd>
                    </div>

                    <div
                      className="
            bg-gray-700
            px-4
            py-5
            sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
          ">
                      <dt className="text-sm font-medium text-gray-500">
                        <button
                          type="submit"
                          id="submit_feed"
                          onClick={this.handleSubmit}
                          className="
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500

              ">
                          Submit Feedback
                        </button>
                      </dt>
                      <dd className="sm:mt-0 sm:col-span-2"></dd>
                    </div>
                  </dl>
                </form>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}
export default Feedback;
