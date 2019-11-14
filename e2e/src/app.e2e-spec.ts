import { AppPage } from './app.po';
import { browser, logging, element, by, Key } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('clic listar factura', () => {
    browser.get('http://localhost:4200');
    element(by.buttonText('Lista de factura')).click();
  });
  });


  it('ingreso datos de reservacion', () => {
    const firstname = "Aquiles";
    const lastname = "Vaesa";
    const email = "aquiles@vaeza.com";
    const phonenumber = "007";
    const reservationdate = "02-09-2029";
    const numberpeople = 6;
    const decor = 'false';
    browser.get('http://localhost:4200');
    element(by.buttonText('Generar Reservacion')).click();
    element(by.id('firstname')).sendKeys(firstname);
    element(by.id('lastname')).sendKeys(lastname);
    element(by.id('email')).sendKeys(email);
    element(by.id('phonenumber')).sendKeys(phonenumber);
    element(by.id('reservationdate')).sendKeys(reservationdate);
    element(by.id('numberpeople')).sendKeys(numberpeople);
    element(by.id('decor')).sendKeys(decor);
    element(by.buttonText('Guardar')).click().then(() => {
      expect(element(by.id("swal2-title")).getText() as Promise<string>).toEqual(`La reservación se guardo con extio`);
    });
  });

  it('clic boton eliminar', () => {
    browser.get('http://localhost:4200/listarCliente');
    element(by.buttonText('Eliminar')).click();
  });
  







  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));

  });
