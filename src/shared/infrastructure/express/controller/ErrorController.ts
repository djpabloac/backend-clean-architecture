export default class ErrorController {
  public getMessageByError = (error: unknown) => {
    if(error instanceof Error)
      return error.message

    return 'An error ocurred'
  }
}