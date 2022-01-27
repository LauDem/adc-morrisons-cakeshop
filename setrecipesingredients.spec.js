// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('set recipes ingredients', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('set recipes ingredients', async function() {
    await driver.get("https://app.freshiq.com/FSPR")
    await driver.manage().window().setRect(1292, 751)
    await driver.findElement(By.id("loginBtn")).click()
    await driver.findElement(By.id("id_topNavMenu_recipe")).click()
    await driver.findElement(By.id("sideNavMenuItem_recipes_label")).click()
    await driver.findElement(By.css(".form-control")).click()
    await driver.findElement(By.css(".form-control")).sendKeys("109368482")
    await driver.findElement(By.css(".form-control")).sendKeys(Key.ENTER)
    await driver.findElement(By.id("colvendorDisplay10")).click()
    await driver.findElement(By.id("sideNavItem_Ingredients")).click()
    await driver.findElement(By.id("formArrayAddNewBtn")).click()
    await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
    await driver.findElement(By.css(".ng-option-label")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("21.67")
    await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
    await driver.findElement(By.css("#adf66eb3e5d3-6 > .ng-option-label")).click()
    await driver.findElement(By.id("formArrayAddNewBtn")).click()
    await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
    await driver.findElement(By.css("#a9ba84b8e86e-0 > .ng-option-label")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("43.33")
    await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
    await driver.findElement(By.css("#a8b6821083cc-6 > .ng-option-label")).click()
    await driver.findElement(By.id("formArrayAddNewBtn")).click()
    await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
    await driver.findElement(By.css(".ng-option-label")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("48")
    await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
    await driver.findElement(By.css("#a5537d2aeff7-6 > .ng-option-label")).click()
    await driver.findElement(By.id("formArrayAddNewBtn")).click()
    await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
    await driver.findElement(By.css(".ng-option-label")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("100")
    await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
    await driver.findElement(By.css("#acb20d69247e-6 > .ng-option-label")).click()
    await driver.findElement(By.id("formArrayAddNewBtn")).click()
    await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
    await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
    await driver.findElement(By.css(".ng-option-label")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).click()
    await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("6")
    await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
    await driver.findElement(By.id("a0b095591eca-6")).click()
    await driver.findElement(By.id("fromArraySubmitBtn")).click()
    await driver.findElement(By.id("sideNavItem_ProductionItems")).click()
    await driver.findElement(By.css("#ProdItems > #formArrayForm > #formArrayTableDiv > #formArrayTableHeader > #formArrayTBody #formArrayAddNewBtn")).click()
    {
      const element = await driver.findElement(By.css("#ngSelect_ItemAutoId-0 > .ng-select-container"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css("#ngSelect_ItemAutoId-0 input"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css("#ngSelect_ItemAutoId-0 > .ng-select-container")).click()
    await driver.findElement(By.css(".ng-option-label")).click()
    await driver.findElement(By.id("input_PieceWeight-0")).click()
    await driver.findElement(By.id("input_PieceWeight-0")).sendKeys("219")
    await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
    await driver.findElement(By.css("#a57b96f83d8d-0 > .ng-option-label")).click()
    await driver.findElement(By.id("input_TotalPieces-0")).click()
    await driver.findElement(By.id("input_TotalPieces-0")).sendKeys("1")
    await driver.findElement(By.css(".row:nth-child(2) > .col-md-12")).click()
    await driver.findElement(By.css(".row:nth-child(2) > .col-md-12 #fromArraySubmitBtn")).click()
    await driver.findElement(By.id("sideNavMenuItem_recipes_label")).click()
    await driver.findElement(By.css(".form-control")).click()
    await driver.findElement(By.css(".form-control")).sendKeys("482")
  })
})
