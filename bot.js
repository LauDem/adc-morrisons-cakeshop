const { Builder, By, Key, until } = require('selenium-webdriver')

exports.bot = async (obj, save = false) => {

    driver = await new Builder().forBrowser('chrome').build()


    // await driver.get("https://app.freshiq.com/FSPR")
    await driver.get("https://x7md.freshiq.com/")

    // await driver.manage().window().setRect(1292, 751)
    await driver.manage().window().maximize()

    await driver.findElement(By.id('loginUser')).sendKeys('adcadmin')
    await driver.findElement(By.id('loginPwd')).sendKeys('adcadmin')

    await driver.findElement(By.id("loginBtn")).click()

    let elem = await driver.wait(until.elementLocated(By.id("id_topNavMenu_recipe")), 10000)
    await elem.click()

    await driver.sleep(1000)


    for(let key of Object.keys(obj)) {

        // if(/*key == 109758341 || */key == 105628494 ) continue;
        let errCount = 0;


        elem = await driver.wait(until.elementLocated(By.id("sideNavMenuItem_recipes_label")), 10000)
        await elem.click()
        await driver.sleep(1000)
        await driver.findElement(By.css(".form-control")).click()
        await driver.findElement(By.css(".form-control")).sendKeys(key)
        await driver.findElement(By.css(".form-control")).sendKeys(Key.ENTER)
        
        // elem = await driver.wait(until.elementLocated(By.id("colvendorDisplay10")), 10000)
        for(let i= 0; i<1; i++)
        {
            try {
            elem = await driver.wait(until.elementLocated(By.css("#RecipeTableObject tbody #listObservable0 #colrecipeDisplay00")), 10000)
            
            await driver.sleep(300)
            await elem.click()
    
        }
        catch(e) {
            errCount++; i--;
            console.log("Attempt "+errCount+" to click row failed : "+ e.name)
            if(errCount>5) throw e;
            continue;

        }}


        /*
        elem = await driver.wait(until.elementLocated(By.id("sideNavItem_Ingredients")), 10000)
        await elem.click()
        */
        let item = obj[key];
        /*
        console.log("recipe "+key)

        

        for(let ingredient of item.ingredients) {

            

            elem = await driver.wait(until.elementLocated(By.css("#recipeIngredientsTable #formArrayAddNewBtn")), 10000)
            await elem.click()

            try{
                elem = await driver.wait(until.elementLocated(By.css("#ngSelect_VendorItemKey-0 input")), 20000)
            } catch (e) {
                console.log(e.name)
                console.log({key: key, ingredient:ingredient.ingredient})
            }
            await elem.click()
            await elem.sendKeys(ingredient.ingredient)
            await driver.sleep(500)

            try {await driver.wait(until.elementLocated(By.css("#ngSelect_VendorItemKey-0 ng-dropdown-panel div.ng-option span.ng-option-label")), 20000)}
            catch(e){
                console.log(e.name)
                console.log({key: key, ingredient:ingredient.ingredient})
            }
            await driver.sleep(500)
            await elem.sendKeys(Key.ENTER)
            await driver.sleep(500)

            elem = await driver.wait(until.elementLocated(By.id("input_CostQuantity-0")), 10000)
            await elem.click()
            await elem.sendKeys(ingredient.quantity)
            await driver.sleep(500)

            elem = await driver.wait(until.elementLocated(By.css("#ngSelect_Units-0 input")), 10000)
            await elem.click()
            await elem.sendKeys("Grams")
            await driver.wait(until.elementLocated(By.css("#ngSelect_Units-0 ng-dropdown-panel div.ng-option span.ng-option-label")), 30000)
            await driver.sleep(500)
            await elem.sendKeys(Key.ENTER)
            await driver.sleep(500)


        }

        if(save) {
            elem = await driver.wait(until.elementLocated(By.css("app-ingredients #fromArraySubmitBtn ")), 10000)
            // console.log("saving ... in progress ...")
            await elem.click()
            await driver.wait(until.elementLocated(By.css("app-ingredients div#ngSelectDiv_VendorItemKey-0>label#stringLabel_VendorItemKey-0>span ")),60000)
            await driver.sleep(500)
        }

        */

        elem = await driver.wait(until.elementLocated(By.id("sideNavItem_ProductionItems")), 10000)
        await elem.click()
        await driver.sleep(500)

        /*
        elem = await driver.wait(until.elementLocated(By.css("app-production-items #formArrayAddNewBtn")), 10000)
        await elem.click()
        await driver.sleep(500)

        elem = await driver.wait(until.elementLocated(By.css("app-production-items #ngSelect_ItemId-0 input")), 20000)
        await elem.click()
        await elem.sendKeys(item.prodItems.item)
        await driver.sleep(500)

        try {await driver.wait(until.elementLocated(By.css("app-production-items #ngSelect_ItemId-0 ng-dropdown-panel div.ng-option span.ng-option-label")), 20000)}
        catch(e){
            console.log(e.name)
            console.log("prodItem "+key+" not found")
        }
        await driver.sleep(500)
        await elem.sendKeys(Key.ENTER)
        await driver.sleep(500)


        elem = await driver.wait(until.elementLocated(By.css("app-production-items #input_PieceWeight-0")), 1000)
        await elem.click()
        await elem.sendKeys(item.prodItems.pieceWeight)
        await driver.sleep(500)


        elem = await driver.wait(until.elementLocated(By.css("#ngSelect_Units-0 input")), 10000)
        await elem.click()
        await elem.sendKeys("grams")
        try {await driver.wait(until.elementLocated(By.css("app-production-items #ngSelect_Units-0 ng-dropdown-panel div.ng-option span.ng-option-label")), 20000)}
        catch(e){
            console.log(e.name)
            console.log("grams not found")
        }
        await driver.sleep(500)
        await elem.sendKeys(Key.ENTER)
        await driver.sleep(500)


        elem = await driver.wait(until.elementLocated(By.id("input_TotalPieces-0")),1000)
        await elem.click()
        await elem.sendKeys(item.prodItems.packSize)
        await driver.sleep(500)


        if(save) {

            // console.log("saving the production items")
            elem = await driver.wait(until.elementLocated(By.css("app-production-items #fromArraySubmitBtn")))

            await elem.click()
            elem = await driver.wait(until.elementLocated(By.css("app-production-items td#ItemId-0>div>div>label>span ")),60000)
            await driver.sleep(500)
        }


        if(save){
            // await driver.sleep(5000)
        }
        */

        
        // break;


        
        if(!item.prodItems.multiple || item.prodItems.multiple < 2 ) continue;

        elem = await driver.wait(until.elementLocated(By.css("app-production-items td#ItemId-0>div>div>label>span ")),60000)
        await driver.sleep(300)
        await elem.click()

        elem = await driver.wait(until.elementLocated(By.css("app-production-item-details #recipeProductionItemForm input#ServingSizeDecimal_ServingSize")), 20000)
        await driver.sleep(300)
        await elem.click()
        await elem.sendKeys("100")

        elem = await driver.wait(until.elementLocated(By.css("app-production-item-details #recipeProductionItemForm input#ServingSizeUOMCode")), 20000)
        await elem.click()
        await elem.sendKeys("Grams")
        await driver.wait(until.elementLocated(By.css("app-production-item-details #recipeProductionItemForm ng-select#select_ServingSizeUOM ng-dropdown-panel div.ng-option span.ng-option-label")), 20000)
        await elem.sendKeys(Key.ENTER)

        elem = await driver.wait(until.elementLocated(By.css("app-production-item-details #recipeProductionItemForm input#SaleableUnitsMultiplierDecimal_SaleableUnitsMultiplier")), 20000)
        await elem.click()
        await elem.sendKeys(item.prodItems.multiple)

        

        if(save) {
            elem = await driver.wait(until.elementLocated(By.css("app-production-item-details #recipeProductionItemForm #recipeProductionItemFormsubmitBtn")), 20000)
            await elem.click()
            console.log("saving prod item multiple for "+key)
            await driver.sleep(5000)
            
        }
        console.log("should be saved")
        // break;

        



        
    
    }
  }


  /* OLD STATIC VERSION BELOW */


          // await driver.findElement(By.css(".ng-option-label")).click()
        // await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
        // await driver.findElement(By.css("#adf66eb3e5d3-6 > .ng-option-label")).click()
        // await driver.findElement(By.id("formArrayAddNewBtn")).click()
        // await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
        // await driver.findElement(By.css("#a9ba84b8e86e-0 > .ng-option-label")).click()
        // await driver.findElement(By.id("input_CostQuantity-0")).click()
        // await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("43.33")
        // await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
        // await driver.findElement(By.css("#a8b6821083cc-6 > .ng-option-label")).click()
        // await driver.findElement(By.id("formArrayAddNewBtn")).click()
        // await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
        // await driver.findElement(By.css(".ng-option-label")).click()
        // await driver.findElement(By.id("input_CostQuantity-0")).click()
        // await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("48")
        // await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
        // await driver.findElement(By.css("#a5537d2aeff7-6 > .ng-option-label")).click()
        // await driver.findElement(By.id("formArrayAddNewBtn")).click()
        // await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
        // await driver.findElement(By.css(".ng-option-label")).click()
        // await driver.findElement(By.id("input_CostQuantity-0")).click()
        // await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("100")
        // await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
        // await driver.findElement(By.css("#acb20d69247e-6 > .ng-option-label")).click()
        // await driver.findElement(By.id("formArrayAddNewBtn")).click()
        // await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
        // await driver.findElement(By.css("#ngSelect_VendorItemAutoId-0 input")).click()
        // await driver.findElement(By.css(".ng-option-label")).click()
        // await driver.findElement(By.id("input_CostQuantity-0")).click()
        // await driver.findElement(By.id("input_CostQuantity-0")).sendKeys("6")
        // await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
        // await driver.findElement(By.id("a0b095591eca-6")).click()
        // await driver.findElement(By.id("fromArraySubmitBtn")).click()
        // await driver.findElement(By.id("sideNavItem_ProductionItems")).click()
        // await driver.findElement(By.css("#ProdItems > #formArrayForm > #formArrayTableDiv > #formArrayTableHeader > #formArrayTBody #formArrayAddNewBtn")).click()
        // {
        //   const element = await driver.findElement(By.css("#ngSelect_ItemAutoId-0 > .ng-select-container"))
        //   await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
        // }
        // {
        //   const element = await driver.findElement(By.css("#ngSelect_ItemAutoId-0 input"))
        //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
        // }
        // await driver.findElement(By.css("#ngSelect_ItemAutoId-0 > .ng-select-container")).click()
        // await driver.findElement(By.css(".ng-option-label")).click()
        // await driver.findElement(By.id("input_PieceWeight-0")).click()
        // await driver.findElement(By.id("input_PieceWeight-0")).sendKeys("219")
        // await driver.findElement(By.css("#ngSelect_Units-0 input")).click()
        // await driver.findElement(By.css("#a57b96f83d8d-0 > .ng-option-label")).click()
        // await driver.findElement(By.id("input_TotalPieces-0")).click()
        // await driver.findElement(By.id("input_TotalPieces-0")).sendKeys("1")
        // await driver.findElement(By.css(".row:nth-child(2) > .col-md-12")).click()
        // await driver.findElement(By.css(".row:nth-child(2) > .col-md-12 #fromArraySubmitBtn")).click()
        // await driver.findElement(By.id("sideNavMenuItem_recipes_label")).click()
        // await driver.findElement(By.css(".form-control")).click()
        // await driver.findElement(By.css(".form-control")).sendKeys("482")
