import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

let datosEmpleados

Given("admin is logged in", () => {
  cy.clearCookies() // Limpiar cookies
  cy.clearLocalStorage() 
  cy.SignIn()
})

And("se encuentra en el dashboard", () => {
  
  cy.visit("/")
  // Limpiar almacenamiento local
  cy.wait(1000)
  cy.url().should("contain", "/dashboard/index")
})

Given("me encuentro en la sección de Registro de Empleados", () => {
  cy.visit("/")
  cy.wait(1000)
  cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  cy.url().should("contain", "/pim/viewEmployeeList")
  cy.get('.orangehrm-header-container > .oxd-button').click()
})

When("ingreso los siguientes datos del nuevo empleado", (dataTable) => {

  /*
  datosEmpleados = dataTable.hashes();

  // Iterar sobre cada fila de la tabla
  datosEmpleados.forEach((datosEmpleado) => {
    const nombreCampo = datosEmpleado['Campo'];
    const valorCampo = datosEmpleado['Valor'];

    // Verificar que los valores se están pasando correctamente
    cy.log("Campo:", nombreCampo); // Salida: "First Name", "Middle Name" o "Last Name"
    cy.log("Valor:", valorCampo); // Salida: "John", "Peralta" o "Mendoza"

    */

    const datosEmpleado = dataTable.rowsHash();

    Object.entries(datosEmpleado).forEach(([nombreCampo, valorCampo]) => {
    cy.log("Campo:", nombreCampo);
    cy.log("Valor:", valorCampo);

    // Luego, ingresamos el valor en el campo correspondiente en la página web
    switch (nombreCampo) {
      case "First Name":
        cy.get('.oxd-input.orangehrm-firstname').type(valorCampo);
        break;
      case "Middle Name":
        cy.get('.oxd-input.orangehrm-middlename').type(valorCampo);
        break;
      case "Last Name":
        cy.get('.oxd-input.orangehrm-lastname').type(valorCampo);
        break;
      default:
        cy.log("Campo no encontrado:", nombreCampo);
        break;
    }
  })
  cy.get('.oxd-button--secondary').click()
  cy.wait(1400)
})

Then("veo un mensaje de éxito que indica que el registro se realizó correctamente", () => {
  cy.get('.oxd-toast').should('be.visible')
  cy.get('.oxd-text--toast-title').should("contain", "Success")
})

And("los datos del empleado registrado coinciden con los datos ingresados", () => {
  cy.url().should("contain", "/viewPersonalDetails/empNumber/")
  cy.wait(3000)
  cy.get('[name="firstName"]').should('have.value', 'John');;
  cy.get('[name="middleName"]').should('have.value', 'Peralta');
  cy.get('[name="lastName"]').should('have.value', 'Mendoza'); 

})