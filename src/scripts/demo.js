import { FuelModelCatalog, FuelBed, FuelIgnition, FireBehavior } from '../index.js'

const catalog = new FuelModelCatalog()

const fm010 = catalog.get(10)
const fm124 = catalog.get(124)

const fuelCuring = {
    curedHerb: 0.778,
}

const fuelMoisture = {
    moistureDead1h: 0.05,
    moistureDead10h: 0.07,
    moistureDead100h: 0.09,
    moistureLiveHerb: 0.5,
    moistureLiveStem: 1.5
}

const limitWindSpeedFactor = true
const limitSpreadRateToWindSpeed = true
const midflameWindSpeed = 10*88
const windBearing = 90
const aspect = 180
const slopeRatio = 0.25

const fuelBed = new FuelBed(fm010, fuelCuring)
const fuelIgnition = new FuelIgnition(fuelBed, fuelMoisture)
const fireBehavior = new FireBehavior(fuelBed, fuelIgnition,
    midflameWindSpeed, windBearing, slopeRatio, aspect,
    limitWindSpeedFactor, limitSpreadRateToWindSpeed)
