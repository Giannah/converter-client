import getRomanConversionService from '@/services/ConverterService.js'

let converterService
let apiClient

beforeEach(() => {
  apiClient = {
    post: jest.fn(),
  }
  converterService = getRomanConversionService(apiClient)
})

describe('ConverterService', () => {
  describe('getConvertedNumber', () => {
    it('should call the correct url', async () => {
      const number = { input: 1 }

      apiClient.post.mockImplementationOnce((payload) => payload === number)
      await converterService.getConvertedNumber(number)

      expect(apiClient.post).toHaveBeenCalledWith('/', number)
    })
  })
})
