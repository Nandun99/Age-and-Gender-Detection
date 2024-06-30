import React, { Component } from "react";
import LoadingSpinner from "./spinnerLoading";
import Feedback from "./feedback";

import smile from "./images/smiley.jpg";
import sad from "./images/sad.jpg";
import neutral from "./images/neutral.jpg";
import surprise from "./images/surprise.jpg";
import fear from "./images/fear.png";

class Results extends Component {
  state = {
    value: this.props.value,
    face: "",
  };
  constructor(props) {
    super(props);

    this.findEmotion();
  }
  findEmotion = () => {
    var str = this.props.predictEmotion;

    switch (str.trim()) {
      case "happy":
        return smile;

        break;
      case "sad":
        // this.setState({ face: sad });
        return sad;
        break;
      case "angry":
        // this.setState({ face: fear });
        return fear;
        break;
      case "fear":
        // this.setState({ face: fear });
        return fear;

        break;
      case "surprise":
        // this.setState({ face: surprise });
        return surprise;
        break;

      case "neutral":
        // this.setState({ face: neutral });
        return neutral;
        break;
      default:
        return "FaceNotDetected";
    }
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
    fontColor: "red",
  };

  render() {
    return (
      <div className="px-4 py-6 sm:px-0 md:col-start-2 md:col-span-2">
        <div className="bg-amber-300 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Prediction Results
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Predicted Age and Gender.
            </p>
          </div>
        </div>
        {(() => {
          if (this.props.loading == 1) {
            return <LoadingSpinner />;
          } else if (this.props.loading == 0) {
            return (
              <div>
                <div
                  className="inline-flex border-t border-gray-200"
                  id="res-section">
                  <dl>
                    <div
                      className="
                      bg-gray-50
                      px-4
                      py-5
                      sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                    ">
                      <dt className="text-sm font-medium text-gray-500">
                        Predicted Gender :
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        id="gender-result">
                        {this.props.predictGender}
                      </dd>
                    </div>
                    <div
                      className="
                      bg-white
                      px-4
                      py-5
                      sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                    ">
                      <dt className="text-sm font-medium text-gray-500">
                        Predicted Age :
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        id="age-result">
                        {this.props.predictAge1}
                      </dd>
                    </div>
                  </dl>
                  <dl className="inline-flex">
                    <div
                      // onLoad={this.findEmotion()}
                      className="
                      bg-gray-50
                      px-4
                      py-5
                      sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                    ">
                      <dt className="text-sm font-medium text-gray-500">
                        Emotion:
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        id="age-result">
                        {this.props.predictEmotion.trim()}
                      </dd>
                      <img src={this.findEmotion()} alt="" width={200} />
                    </div>
                  </dl>
                </div>

                <Feedback
                  key="4"
                  predictAge1={this.props.predictAge1}
                  predictGender={this.props.predictGender}
                  image={this.props.image}
                />
              </div>
            );
          }
        })()}
      </div>
    );
  }
}
export default Results;
