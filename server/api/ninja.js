export default defineEventHandler(async (event) => {

    // //handle query params

    // const { name } = getQuery(event)

    // //handlo post data

    // const { age } = await readBody(event)

    //api call  with private key
    const {data} =await $fetch('https://api.currencyapi.com/v3/latest?apikey=PCz26PoPsivBdIHNlktTiqkH0PN7PUqRaEU4E9pm')
    

    return data
})