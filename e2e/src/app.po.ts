import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.driver.manage().window().maximize();
    return browser.get('http://localhost:4200/ingreso-estacionamiento');
  }

  insertarPlaca(placa) {
    element(by.id('placa')).sendKeys(placa);
  }

  obtenerPlaca() {
    return element(by.id('placa')).getAttribute('value');
  }

  insertarCilindraje(cilindraje) {
    element(by.id('cilindraje')).sendKeys(cilindraje);
  }

  obtenerCilindraje() {
    return element(by.id('cilindraje')).getAttribute('value');
  }

  seleccionarTipoVehiculo(){
    element(by.id('tipoVehiculo')).click(); 
    element(by.css('.mat-option')).click();
  }

  clickEnviarPeticion() {
    element(by.id('btnGuardar')).click();
  }
}
