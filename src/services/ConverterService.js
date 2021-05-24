export default function getRomanConversionService(apiClient) {
  const converterService = {
    async getConvertedNumber(payload) {
      const convertedNumber = await apiClient.post('/', payload)
      return convertedNumber
    },
  }
  return converterService
}
