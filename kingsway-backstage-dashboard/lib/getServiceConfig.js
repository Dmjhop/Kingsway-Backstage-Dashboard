export async function getServiceConfig(serviceType) {
  const configs = {
    sunday: {
      planningCenterTypeId: process.env.SUNDAY_SERVICE_TYPE_ID,
      teamIds: {
        vocals: "5767747",
        band1: "1017818",
        band2: "2654233",
        orchestra: "5674102",
        creative: "3494157",
        choir: "3804540",
        platformShadows: "3552069",
        production: "1017822",
        productionShadows: "5045952",
        campus: "2620409",
      },
    },
  }
  return configs[serviceType] || configs.sunday
}
