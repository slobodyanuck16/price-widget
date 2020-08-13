import React, { Component } from "react";

import "./widget.scss";

class Widget extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                selectedOption: "500 грн",
                checked: false,
            });
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value,
        });
    };

    handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
        console.log("You have selected:", this.state.selectedOption);
        alert(`You added to cart: ${this.state.selectedOption}`);
    };

    render() {
        return (
            <div className="widget-container">
                <div className="widget-container__titles">
                    <span>Тип</span>
                    <span>Ціна</span>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="widget-container__radio">
                        <label
                            className={
                                this.state.selectedOption === "500 грн"
                                    ? "widget-container__radio__item_checked"
                                    : "widget-container__radio__item"
                            }
                        >
                            <div className="widget-container__radio__item_price">
                                <input
                                    className="widget-container__radio__item_circle"
                                    type="radio"
                                    value="500 грн"
                                    checked={
                                        this.state.selectedOption === "500 грн"
                                    }
                                    onChange={this.handleOptionChange}
                                />
                                <span>500 грн</span>
                            </div>
                            500 г
                        </label>
                    </div>
                    <div className="widget-container__radio">
                        <label
                            className={
                                this.state.selectedOption === "150 грн"
                                    ? "widget-container__radio__item_checked"
                                    : "widget-container__radio__item"
                            }
                        >
                            <div className="widget-container__radio__item_price">
                                <input
                                    className="widget-container__radio__item_circle"
                                    type="radio"
                                    value="150 грн"
                                    checked={
                                        this.state.selectedOption === "150 грн"
                                    }
                                    onChange={this.handleOptionChange}
                                />
                                <span>150 грн</span>
                            </div>
                            100 г
                        </label>
                    </div>
                    <div className="widget-container__radio">
                        <label
                            className={
                                this.state.selectedOption === "90 грн"
                                    ? "widget-container__radio__item_checked"
                                    : "widget-container__radio__item"
                            }
                        >
                            <div className="widget-container__radio__item_price">
                                <input
                                    className="widget-container__radio__item_circle"
                                    type="radio"
                                    value="90 грн"
                                    checked={
                                        this.state.selectedOption === "90 грн"
                                    }
                                    onChange={this.handleOptionChange}
                                />
                                <span>90 грн</span>
                            </div>
                            50 г
                        </label>
                    </div>
                    <div className="widget-container__footer">
                        <span>{`${this.state.selectedOption}`}</span>
                        <button
                            className="widget-container__footer_submit-btn"
                            type="submit"
                        >
                            <img src="../img/supermarket.png" alt="basket" />
                            До кошика
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Widget;
