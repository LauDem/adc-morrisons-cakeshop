const {bot} = require('./bot')
const csv=require('csvtojson')
const fs = require('fs');

const delisted = require("./delisted.json")

async function fromCSV(csvFilePath) {
    return await csv().fromFile(csvFilePath)
}

(

    async ()=>{

        var guessPackSize = (str) => {
            var numb = str.match(/\d/g);
            if(!numb) return 1;
            numb = numb.join("");
            return numb;
        }

        let ingredients = await fromCSV('ingredients.csv')
        let prodItems = await fromCSV('productionItems.csv')

        let obj = {}

        let orphanRecipes = [105630412, 102398734, 102398726, 105320676, 108099532, 108105998, 105819266, 109223128, 109905313, 109905356, 112028219, 105697941, 111806293, 111806314, 111806251, 111857496, 111806331, 111806277, 111207565, 111878086, 111964902, 111967425, 112084333]
        
        for(let ingredient of ingredients) {
            // console.log(ingredient)
            // break;

            // if(ingredient.set == "n") continue;

            if(delisted.includes(parseInt(ingredient['Recipe MIN Code'])) || orphanRecipes.includes(parseInt(ingredient['Recipe MIN Code']))) continue;



            
            if(!obj[ingredient['Recipe MIN Code']]) obj[ingredient['Recipe MIN Code']] = {
                ingredients:[], 
                prodItems:{
                    item : ingredient['Recipe MIN Code'],
                    packSize : '',
                    weight: 0,
                    pieceWeight:0
                }}

            obj[ingredient['Recipe MIN Code']].prodItems.weight += parseFloat(ingredient['Quantity (g)'])

            let elem = {
                ingredient : "",
                quantity : ingredient['Quantity (g)']
            }

            ingredient['Ingredient MIN Code'].toLowerCase() == "water" ? 
                elem.ingredient = 999999 :
                elem.ingredient = ingredient['Ingredient MIN Code']


            /*!*/obj[ingredient['Recipe MIN Code']].ingredients.push(elem)
        }

        for(let pi of prodItems) {

            if(isNaN(parseInt(pi['SKU Item Nbr']))) break;
            
            if(!Object.keys(obj).includes(pi['SKU Item Nbr'])) {
                console.log(pi['SKU Item Nbr']+ ' has no recipe');
                // delete obj[pi['SKU Item Nbr']]

                continue;}
            
            pi['Pack Size'] ? 
                obj[pi['SKU Item Nbr']].prodItems.packSize = pi['Pack Size'] : 
                obj[pi['SKU Item Nbr']].prodItems.packSize = guessPackSize(pi['SKU Item Name'])

            obj[pi['SKU Item Nbr']].prodItems.pieceWeight = obj[pi['SKU Item Nbr']].prodItems.weight / parseInt(obj[pi['SKU Item Nbr']].prodItems.packSize)

            pi["Production Multiple"] ?
                obj[pi['SKU Item Nbr']].prodItems.multiple = pi["Production Multiple"] :
                obj[pi['SKU Item Nbr']].prodItems.multiple = 1

            // console.log(pi['SKU Item Nbr'])
            // console.log(pi["Prep"])
            
            // if(pi["Prep"]) {
            //     console.log(pi['SKU Item Nbr'])
            // }
                


        }
        // console.log(obj)

        // fs.writeFileSync("data_2.json", JSON.stringify(obj, null, 4))

        // console.log(obj, Object.keys(obj).length, obj['111813741'].prodItems)

        

        try{
            await bot(obj, true)
            console.log("process finished")

        }
        catch(e){
            // console.log(Object.keys(e))
            console.log(e.name)
            console.log(e.message)
            throw "process killed.... Error."
        };
        

    }

)()