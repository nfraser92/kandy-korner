import React, { Component } from "react";
import StoreList from "./StoreList";
import EmployeeList from "./EmployeeList"
import "../Kandy.css"
import CandyList from "./CandyList";

export default class KandyKorner extends Component {
  StoreList = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ];

  EmployeeList =[
      { id: 1, name: "Jessica Younker" },
      { id: 2, name: "Jordan Nelson" },
      { id: 3, name: "Zoe LeBlanc" },
      { id: 4, name: "Blaise Roberts" }
  ]

  CandyTypes=[
      { id: 1, name: "Milk Chocolate" },
      { id: 2, name: "White Chocolate" },
      { id: 3, name: "Gummies" }
  ]

  Candies=[
      { id: 1, name: "Snickers", typeId: 1 },
      { id: 2, name: "Dove", typeId: 1 },
      { id: 3, name: "Haribos", typeId: 3 },
      { id: 4, name: "MilkyWay", typeId: 2 }
  ]

  state = {
    stores: this.StoreList,
    employees: this.EmployeeList,
    candytypes: this.CandyTypes,
    candies: this.Candies
  };
  render() {
    return (
      <article className="kandy">
        <StoreList stores={this.state.stores} />
         <EmployeeList employees={this.state.employees} />
         <CandyList candyTypes={this.state.candytypes}
                    candies ={this.state.candies} />
      </article>
    );
  }
}
