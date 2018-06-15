describe("Expected timer page", () => {
  it("Visits timer page", () => {
    cy.visit("http://localhost:3000/#/timer")
  })
})
describe("Edits the project name", () => {
  it("should edit the name.", () => {
    cy.get(".editTest1").type("runescape")
    cy.get(".editButtonTest1").click()
  })
})
describe("User can Delete a Project", () => {
  it("Deletes. ", () => {
    cy.get(".deleteTest1").click()
  })
})
describe("User Can Reload the page and Items Will remain", () => {
  it("User can reload the page with saved items. ", () => {
    cy.reload()
  })
})
describe("User Can properly Log out of the page ", () => {
  it("User can logout and be redirected to home ", () => {
    cy.get(".logoutTest").click()
  })
})
