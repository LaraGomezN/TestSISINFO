const { Given,When,Then} = require('@cucumber/cucumber');
const LoginPage = require('../pageObject/loginPage');
const RolesPage = require('../pageObject/rolesPage');
const ProyectosPage = require('../pageObject/proyectosGradoPage');
const LogOutPage = require('../pageObject/logoutPage');


//Login steps
When('I login with {string} and {string}', async function (username, password) {
    const loginPage = new LoginPage(this.driver);
    await loginPage.open();
    await loginPage.login(username, password);
    await loginPage.pauseForLogin(2000);
});

//Roles steps
When ('I go to Roles section', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.goToRoles();
}); 

When ('I search for user {string}', async function (username) { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.searchUser(username);
});

When ('I click in role assign', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.goToAsignarRoles();
});

When ('I assign profesor role', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.assignProfesorRole();
});

Then ('I check profesor role assigned', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.checkProfesorRoleAssigned();
});

Then ('I remove profesor role', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.assignProfesorRole();
});


When ('I assign coordinador role', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.assignCoordinadorRole();
});

Then ('I check coordinador role assigned', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.checkCoordinadorRoleAssigned();
});

Then ('I remove coordinador role', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.assignCoordinadorRole();
});


When ('I clear search input', async function () { 
    const rolesPage = new RolesPage(this.driver);
    await rolesPage.clearSearch();
});

//Proyectos steps




When ('I go to Proyectos de Grado section', async function () { 
    const proyectosPage = new ProyectosPage(this.driver);
    await proyectosPage.goToProyectosDeGrado();
    await proyectosPage.goToPublicarConsultarProyectos();
});

When ('I go to Crear Tema de Proyecto section', async function () { 
    const proyectosPage = new ProyectosPage(this.driver);
    await proyectosPage.goToCrearTemaProyecto();
}   );


//LogOut Page

When('I log out', async function () {
    const logoutPage = new LogOutPage(this.driver);
    await logoutPage.openProfileMenu();
    await logoutPage.clickLogout();
});


When('I click on the Coordinador tab', async function () {
    const logoutPage = new LogOutPage(this.driver);
    await logoutPage.clickCoordinadorTab();
});


When('I click on the Profesor tab', async function () {
    const logoutPage = new LogOutPage(this.driver);
    await logoutPage.clickProfesorTab();
});


When('I click on Consultar programas de clases', async function () {
    const logoutPage = new LogOutPage(this.driver);
    await logoutPage.clickConsultarProgramas();
});


