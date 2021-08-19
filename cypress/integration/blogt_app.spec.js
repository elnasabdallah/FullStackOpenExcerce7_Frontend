describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    const user = {
      name: "Matti Luukkainen",
      username: "elnas",
      password: "1234",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user);
    cy.visit("http://localhost:3000");
  });

  it("Login form is shown", function () {
    cy.contains("login").click();
    cy.contains("Username");
  });

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.contains("login").click();
      cy.get("#username").type("elnas");
      cy.get("#password").type("1234");
      cy.get("#submit").click();
      cy.contains("elnas logged In");
    });

    it("fails with wrong credentials", function () {
      cy.contains("login").click();
      cy.get("#username").type("elnas");
      cy.get("#password").type("1134");
      cy.get("#submit").click();
      cy.contains("Invalid username or password");
    });
  });

  describe("When logged in", function () {
    beforeEach(function () {
      cy.login({ username: "elnas", password: "1234" });
    });

    it("A blog can be created", function () {
      cy.contains("create new blog").click();
      cy.get(".title").type("Testing cypress");
      cy.get(".author").type("Nasir");
      cy.get(".url").type("http://test.com");
      cy.get("#create").click();
      cy.contains("a new blog Testing cypress by Nasir added");

      cy.contains("view").click();
      cy.contains("like").click();
    });

    it("A deleted by its creator", function () {
      cy.contains("create new blog").click();
      cy.get(".title").type("Testing cypress");
      cy.get(".author").type("Nasir");
      cy.get(".url").type("http://test.com");
      cy.get("#create").click();
      cy.contains("a new blog Testing cypress by Nasir added");
      cy.contains("view").click();
      cy.contains("remove").click();

      cy.contains("blog removed successfully");
    });
  });
  describe("If blogs are ordered according to the number of likes", function () {
    beforeEach(function () {
      cy.login({ username: "elnas", password: "1234" });
      cy.create({ title: "Testing1", author: "Nasir", url: "http://nas1" });
      cy.create({ title: "Testing2", author: "Nasiru", url: "http://nas2" });
      cy.create({ title: "Testing3", author: "user", url: "http://nas3" });
      cy.contains("Testing1").parent().as("blog1");
      cy.contains("Testing2").parent().as("blog2");
      cy.contains("Testing3").parent().as("blog3");
    });
    it.only("check blogs order", function () {
      cy.get("@blog1").contains("view").click();
      cy.get("@blog2").contains("view").click();
      cy.get("@blog3").contains("view").click();

      cy.get("@blog1").contains("like").as("like1");
      cy.get("@blog2").contains("like").as("like2");
      cy.get("@blog3").contains("like").as("like3");

      //like blog 2 three times, blog1 once and blog 3 twice
      cy.get("@like1").click();
      cy.wait(500);
      cy.get("@like2").click();
      cy.wait(500);
      cy.get("@like2").click();
      cy.wait(500);
      cy.get("@like2").click();
      cy.wait(500);
      cy.get("@like3").click();
      cy.wait(500);
      cy.get("@like3").click();
      cy.wait(500);

      cy.get(".blogDetail").then(blog => {
        cy.wrap(blog[0]).contains("3");
        cy.wrap(blog[1]).contains("2");
        cy.wrap(blog[2]).contains("1");
      });
    });
  });
});
