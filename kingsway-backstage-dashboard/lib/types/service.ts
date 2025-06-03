interface ServiceType {
  id: string
  name: string
  planningCenterTypeId: string
  displayName: string
  refreshInterval: number
  teamIds: {
    vocals: string
    band: string
    orchestra: string
    production: string
    campus: string
  }
}
