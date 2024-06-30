import React, { Component } from "react";
import Results from "./results";
import Navbar from "./navbar";
import Webcam from "react-webcam";
import Image from "./image";
import { BiSend } from "react-icons/bi";
import dataURItoBlob from "datauritoblob";
import WebCamera from "./webcamera";

class App extends Component {
  state = {
    predictGender: "",
    predictAge1: "",
    predictAge2: "",
    predictedEmotion: "",
    counters: [{ id: 1, value: 4 }],
    media: 1,
    loading: 1,
    imageURL: "",
  };

  handlePrediction = () => {
    let predict = this.props.predict;
  };
  loading = (b) => {
    if (b) {
      this.setState({ loading: 1 });
    } else {
      this.setState({ loading: 0 });
    }
  };

  getData = (rowData) => {
    let predict = rowData;

    try {
      let predictions = predict.split("|");

      let gender = predictions[0].split(":");
      let age1 = predictions[1].split(":");
      let age2 = predictions[2].split(":");
      let emotion = predictions[3].split(":");

      this.setState({
        predictGender: gender[1],
        predictAge1: age1[1],
        predictAge2: age2[1],
        predictedEmotion: String(emotion[1]),
      });
    } catch (e) {
      this.setState({
        predictGender: "faceNotDetected",
        predictAge1: "faceNotDetected",
        predictAge2: "faceNotDetected",
      });
    }
  };
  showImage = (imageURLs) => {
    let img = imageURLs;
    this.setState({ imageURL: img });
  };
  getImage = () => {
    return this.state.imageURL;
  };

  setMedia = (mediaNo) => {
    this.setState({ media: mediaNo });
  };
  setLoading = (loadingNo) => {
    this.setState({ loading: loadingNo });
  };
  selectCam = () => {
    this.setState({ media: 1, loading: 1 });
  };
  handleUploadImage = (ev, imageSrc, r) => {
    let self = this;
    setLoad(imageSrc);
    ev.preventDefault();

    const file = dataURItoBlob(imageSrc);
    const formData = new FormData();
    formData.append("file", file, "image.jpg");

    console.log(imageSrc);
    console.log(file);

    fetch("http://a37a-34-143-228-87.ngrok.io/predict", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.text().then(function(text) {
        self.getData(text);

        self.setLoading(0);
      });
    });

    function setLoad(imageSrc) {
      // self.setState({ loading: 1 });

      if (r === 1) {
        self.setLoading(1);
        self.showImage(imageSrc);
        self.setMedia(0);
      }
      // self.setState({ imageURL: imageSrc, media: 0 });
    }
  };
  render() {
    return (
      <div className="min-h-full">
        <Navbar />

        <div className="containers px-1   sm:px-0">
          <div>
            {(() => {
              if (this.state.media === 1) {
                return (
                  <WebCamera
                    getData={this.getData}
                    showImage={this.showImage}
                    setMedia={this.setMedia}
                    selectCam={this.selectCam}
                    loading={this.loading}
                    getImage={this.getImage}
                    handleUploadImage={this.handleUploadImage}
                    media={this.state.media}
                  />
                );
              } else {
                return (
                  <center>
                    <div
                      className="border-4 border-dashed border-gray-200
                  rounded-lg
                  px-3
                  py-5
                  sm:min-w-full
                  my-2">
                      <img
                        src={this.state.imageURL}
                        alt=""
                        width="600px"
                        height={400}
                      />
                      <br />
                      <br />
                      <Image
                        onSet={this.getData}
                        onImage={this.showImage}
                        onCam={this.selectCam}
                        setIsLoading={this.loading}
                        webcam={this.getImage}
                        media={this.state.media}
                        setMedia={this.setMedia}
                      />
                    </div>
                  </center>
                );
              }
            })()}
            <br />
          </div>

          <div>
            {this.state.counters.map((counter) => (
              <Results
                key={counter.id}
                value={counter.value}
                loading={this.state.loading}
                predictGender={this.state.predictGender}
                predictAge1={this.state.predictAge1}
                predictAge2={this.state.predictAge2}
                predictEmotion={this.state.predictedEmotion}
                image={this.state.imageURL}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
