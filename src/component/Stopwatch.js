import React from "react";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }
  StartTime = () => {
    this.interval = setInterval(() => {
      this.setState((state) => ({ seconds: state.seconds + 1 }));
    }, 1000);
  };
  StopTime = () => {
    clearInterval(this.interval);
  };
  ResetTime = () => {
    this.setState({
      seconds: 0,
    });
  };
  render() {
    const { seconds } = this.state;
    return (
      <div className="container">
        <div className="center">
          <div className="title">
            <h1>Đồng hồ bấm giờ</h1>
          </div>
          <div className="result">
            <p>Seconds: {seconds}</p>
          </div>
          <div className="btn">
            <button onClick={() => this.StartTime()}>Start</button>
            <button onClick={() => this.StopTime()}>Stop</button>
            <button onClick={() => this.ResetTime()}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
