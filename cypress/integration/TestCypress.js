//person 3

describe("my first test", () => {
  it("Visits home page", () => {
    cy.visit("http://localhost:3000/#/")
  })
})
//animate avatars
// describe("Checks if avatar menu can slide and move properly", () => {
//   it("Should animate properly.", () => {
//     cy.get(".avaTest1").click({ force: true })
//   })
// })

describe("finds bottom button", () => {
  it("Finds Bottom Button", () => {
    cy.get(".top").click()
  })
})

describe("Navigates to the eye", () => {
  it("Finds location of the eye", () => {
    cy.scrollTo(0, 1400)
  })
})

describe("Burger should be false if not clicked. ", () => {
  it("Checks if burger is false", () => {
    cy.get(".burgerTest").click({ force: true })
  })
})

describe("User Can Reload the page and Items Will remain", () => {
  it("User can reload the page with saved items. ", () => {
    cy.reload()
  })
})

//person 1 test

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

//person 2

describe("Expected timer page", () => {
  it("Visits timer page", () => {
    cy.visit("http://localhost:3000/#/timer")
  })
})

describe("User Can go back and forward to navigate website", () => {
  it("Visits timer page and navigates back. ", () => {
    cy.go("back")
    cy.go("forward")
  })
})

describe("Can Create a Time Project", () => {
  it("Creates a Time", () => {
    cy.get(".ProjectTest").type("testing")
    cy.get(".startTest").click()
    cy.get(".stopTest").click()
  })
})
describe("User can Delete a Project", () => {
  it("Deletes. ", () => {
    cy.get(".deleteTest1").click()
  })
})
describe("User Can properly Log out of the page ", () => {
  it("User can logout and be redirected to home ", () => {
    cy.get(".logoutTest").click()
  })
})

//arrange - setup initial app state

//act - take an action

//assert - make an assertion
