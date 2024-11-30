
function createCity(country, cityName) {
    country.push([cityName, []]);
}

function createHousing(country, cityName, housingName) {
    var city = getCity(country, cityName);
    if (!city) {
        console.log("Failure to get city")
        return null;
    }
    
    city[1].push(housingName, []);
}

function addCharacteristics(country, cityName, housingName, ...characteristics) {
    var city = getCity(country, cityName);
    if (!city) {
        console.log("Failure to get city")
        return null;
    }

    var housing = city.find(housing => housing[0] == housingName);
    if (!housing) {
        console.log("Failure to get house")
        return null;
    }
    housing[1].push(...characteristics);
}

function getCity(country, cityN) {
    return country.find(city => city[0] == cityN);
}

function getCharacteristics(country, city, housingC) {
    return getCity(country, city).find(housing => housing[0] == housingC)[1]
}
