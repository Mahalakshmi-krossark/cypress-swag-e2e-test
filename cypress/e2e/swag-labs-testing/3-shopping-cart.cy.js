/// <reference types='cypress'/>

import { LoginAction } from "../../actions/login_action";

describe("shopping cart tests", () => {
  const login = new LoginAction();

  beforeEach(() => {
    login.enterCredentials("standard_user", "secret_sauce");
  });

  it("when user adds a item into the cart, it should show the corresponding product information in the cart page properly", () => {
    cy.contains(".inventory_item", "Sauce Labs Backpack").contains("Add to cart").click();
    cy.get(".shopping_cart_badge").click();

    cy.get(".inventory_item_name")
      .should("have.length", 1)
      .eq(0)
      .should("contain.text", "Sauce Labs Backpack");
  });

  it("when user adds item into the cart, it should show the product information like description, quantity & price in shopping cart page", () => {
    cy.contains(".inventory_item", "Sauce Labs Backpack").contains("Add to cart").click();
    cy.get(".shopping_cart_badge").click();
    const cartItem = cy.contains(".cart_item", "Sauce Labs Backpack");
    cartItem.get(".inventory_item_desc").should("contain.text","carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection");
    cartItem.get(".inventory_item_price").should("contain.text", "$29.99");
    cartItem.get(".cart_quantity").should("contain.text", "1");
  });

  it("when user removes items from the cart, it should be removed from the cart list", () => {
    cy.contains(".inventory_item", "Sauce Labs Backpack").contains("Add to cart").click();
    cy.contains(".inventory_item", "Sauce Labs Bolt T-Shirt").contains("Add to cart").click();
    cy.get(".shopping_cart_badge").click();
    cy.contains(".cart_item", "Sauce Labs Backpack").contains("Remove").click();
    cy.get(".inventory_item_name")
      .should("have.length", 1)
      .eq(0)
      .should("contain.text", "Sauce Labs Bolt T-Shirt");
  });

  it("when adding multiple items into a shopping cart, it should show the details of the each item in the cart", () => {
    cy.contains(".inventory_item", "Sauce Labs Backpack").contains("Add to cart").click();
    cy.contains(".inventory_item", "Sauce Labs Bolt T-Shirt").contains("Add to cart").click();
    cy.get(".shopping_cart_badge").click();
    cy.get(".inventory_item_name").should("have.length", 2);
    cy.get(".inventory_item_name")
      .eq(0)
      .should("contain.text", "Sauce Labs Backpack");
    cy.get(".inventory_item_name").eq(1).should("contain.text", "Bolt T-Shirt");
  });
});