export default class ErrorEntity {
  public static getMessageByError = (error: unknown) => {
    if(error instanceof Error)
      return error.message

    return 'An error ocurred'
  }
}