const round = (x) => Math.round(x * Math.pow(10, 2)) / Math.pow(10, 2);

export const calculateCure = (weight, nitrite, salt, sugar, ppm, unit = 'metric') => {

  if (unit === 'imperial') {
    weight = weight * 453.592
  }

  const ppmFraction = ppm / 100
  const weightTimesPpmFraction = weight * ppmFraction
  const nitriteTimes100 = nitrite * 100
  const nitriteCalculation = weightTimesPpmFraction / nitriteTimes100
  const remainingNitrite = 100 - nitrite
  const remainingNitriteTimesCalculation = nitriteCalculation * remainingNitrite
  const remainingNitritePercentage = remainingNitriteTimesCalculation / 100
  const saltCalculation = weight * salt / 100 - remainingNitritePercentage
  const sugarCalculation = weight * sugar / 100

  const combinedTotal = Number(weight) + nitriteCalculation + saltCalculation + sugarCalculation

  return {
    meat_weight: round(weight),
    cure: round(nitriteCalculation),
    salt: round(saltCalculation),
    sugar: round(sugarCalculation),
    total: round(combinedTotal),
  }
}