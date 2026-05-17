describe("Teste End-to-End", () => {
  it("Teste completo", () => {
    cy.visit("http://localhost:5000/");

    cy.get("[data-id=3]").should("contain.text", "Design Patterns");

    cy.get("[data-id=3]").within(() => {
      cy.get("input").type("10000-000");
      cy.contains("Calcular Frete").click();
      cy.wait(2000);
    });

    cy.get(".swal-text").contains("O frete é: R$");

    cy.get(".swal-button").click();

    cy.get("[data-id=3]").within(() => {
      cy.contains("Comprar").click();
    });

    cy.wait(2000);

    cy.get(".swal-text").contains("Sua compra foi realizada com sucesso");

    cy.get(".swal-button").click();
  });
});
