import React, { Component } from 'react';
import { createStore, getState } from 'redux';

class Buttons extends Component {
  render() {
    return (
      <div>
        <form name="calcForm">
          <input name="result" />
          <br />
          <input className="btn btn-secondary" type="button" name="1" value="1" onClick={this.run1} />
          <input className="btn btn-secondary" type="button" name="2" value="2" onClick={this.run2} />
          <input className="btn btn-secondary" type="button" name="3" value="3" onClick={this.run3} />
          <input className="btn btn-secondary" type="button" name="plus" value="+" onClick={this.runplus} />
          <br />

          <input className="btn btn-secondary" type="button" name="4" value="4" onClick={this.run4} />
          <input className="btn btn-secondary" type="button" name="5" value="5" onClick={this.run5} />
          <input className="btn btn-secondary" type="button" name="6" value="6" onClick={this.run6} />
          <input className="btn btn-secondary" type="button" name="times" value="*" onClick={this.runtimes} />
          <br />

          <input className="btn btn-secondary" type="button" name="7" value="7" onClick={this.run7} />
          <input className="btn btn-secondary" type="button" name="8" value="8" onClick={this.run8} />
          <input className="btn btn-secondary" type="button" name="9" value="9" onClick={this.run9} />
          <input className="btn btn-secondary" type="button" name="subtract" value="-" onClick={this.runsubtract} />
          <br />

          <input className="btn btn-secondary" type="button" name="calc" value="=" onClick={this.evalu} />
          <input className="btn btn-secondary" type="button" name="clear" value="C" onClick={this.runclear} />
          <input className="btn btn-secondary" type="button" name="dot" value="." onClick={this.rundot} />
          <input className="btn btn-secondary" type="button" name="divide" value="/" onClick={this.rundivide} />

        </form>
      </div>
    );
  }

  run1() {
    document.calcForm.result.value += "1"
  }
  run2() {
    document.calcForm.result.value += "2"
  }
  run3() {
    document.calcForm.result.value += "3"
  }
  run4() {
    document.calcForm.result.value += "4"
  }
  run5() {
    document.calcForm.result.value += "5"
  }
  run6() {
    document.calcForm.result.value += "6"
  }
  run7() {
    document.calcForm.result.value += "7"
  }
  run8() {
    document.calcForm.result.value += "8"
  }
  run9() {
    document.calcForm.result.value += "9"
  }

  runplus() {
    document.calcForm.result.value += "+"
  }
  runsubtract() {
    document.calcForm.result.value += "-"
  }
  runtimes() {
    document.calcForm.result.value += "*"
  }
  rundivide() {
    document.calcForm.result.value += "/"
  }
  rundot() {
    document.calcForm.result.value += "."
  }
  evalu() {
    var evalu = eval(document.calcForm.result.value)
    document.calcForm.result.value = evalu;
  }
  runclear() {
    document.calcForm.result.value = "";
  }
}

export default Buttons;
