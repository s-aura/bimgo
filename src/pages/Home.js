import React, { createRef, useContext, useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import UserContext from "../usercontext";
import { Chart, registerables } from "chart.js";
import axios from "axios";
Chart.register(...registerables);

function Home() {
  const [transType, setTransType] = useState(null);
  const [transName, setTransName] = useState(null);
  const [transCategory, setTransCategory] = useState(null);
  const [transAmount, setTransAmount] = useState(null);
  const [transDescription, setTransDescription] = useState(null);

  useEffect(() => {
    // destroy canvas
    const canvas = document.getElementById("myChart").getContext("2d");
    canvas.clearRect(0, 0, canvas.width, canvas.height);

    const ctx = document.getElementById("myChart").getContext("2d");
    const newchart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Food and travels", "Education", "Enterntainment", "Grocery", "Other"],
        datasets: [
          {
            label: "# Balance Sheet",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)", 
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  const closeModel = () => {
    // set value to null
    setTransType(null);
    setTransName(null);
    setTransCategory(null);
    setTransAmount(null);
    setTransDescription(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    axios
      .post("http://localhost:5000/api/expense/add_transaction", {
        user_id: "60f1b1b0b0b2a8a0b4b0b1b1",
        type: transType,
        name: transName,
        category: transCategory,
        amount: transAmount,
        date: new Date(),
        description: transDescription,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <DefaultLayout>
      <div className="container d-flex justify-content-end">
        <a
          className="btn btn-danger mx-2"
          data-bs-toggle="modal"
          data-bs-target="#addTransaction"
        >
          Add Transaction
        </a>
      </div>

      <div className="container mt-5" style={{maxHeight:"500px"}}>
        <canvas id="myChart"></canvas>
      </div>

      <div
        className="modal fade"
        id="addTransaction"
        tabIndex="-1"
        aria-labelledby="addTransactionlabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addTransactionlabel">
                Add New Transction
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {transType === null ? (
                <div className="container d-flex justify-content-center align-items-center">
                  <div
                    className="d-flex mx-3 rounded justify-content-center align-items-center bg-dark text-white text-lg"
                    style={{
                      width: "150px",
                      height: "150px",
                      cursor: "pointer",
                    }}
                    onClick={() => setTransType("expense")}
                  >
                    Expense
                  </div>
                  <div
                    className="d-flex mx-3 rounded justify-content-center align-items-center bg-dark text-white text-lg"
                    style={{
                      width: "150px",
                      height: "150px",
                      cursor: "pointer",
                    }}
                    onClick={() => setTransType("income")}
                  >
                    Income
                  </div>
                </div>
              ) : (
                <div>
                  <div className="container border d-flex justify-content-center py-3">
                    {transType === "income" ? (
                      <h5 className="text-success">Income</h5>
                    ) : (
                      <h5 className="text-danger">Expense</h5>
                    )}
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 col-md-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Amount
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="amount"
                          aria-label="amount"
                          aria-describedby="basic-addon1"
                          value={transAmount}
                          onChange={(e) => setTransAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          Category
                        </span>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => setTransCategory(e.target.value)}
                        >
                          <option selected>Select Category</option>
                          <option value="home"> Home </option>
                          <option value="grocery"> Grocery </option>
                          <option value="education"> Education </option>
                          <option value="entertainment"> Entertainment </option>
                          <option value="food and travel">Food and Travel</option>
                          <option value="others"> Others </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      {/* description */}
                      <div class="input-group">
                        <span class="input-group-text">Description</span>
                        <textarea
                          class="form-control"
                          aria-label="With textarea"
                          value={transDescription}
                          onChange={(e) => setTransDescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
