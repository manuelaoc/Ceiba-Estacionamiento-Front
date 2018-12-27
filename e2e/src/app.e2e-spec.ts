import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('Crear estacionamiento', () => {
  let page: AppPage;
  page = new AppPage();
  page.navigateTo();

  it('Permitir ingreso de placa', () => {
    //Act
    page.insertarPlaca("LOA111");
    //Assert
    expect(page.obtenerPlaca()).toBe("LOA111");
  });

  it('Permitir ingreso de cilindraje', () => {
    //Act
    page.insertarCilindraje("1600");
    //Assert
    expect(page.obtenerCilindraje()).toBe("1600");
  });

  it('Completar informacion y enviar peticion al servidor', () => {
    page.seleccionarTipoVehiculo();
    browser.sleep(1000);
    page.clickEnviarPeticion();
  });
});
