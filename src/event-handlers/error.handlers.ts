type Error = {
    error: {
      code: string
      short_desc: string
      long_desc: string
    }
  }
  
  type Message = {
    message: Error
  }
  
  const ErrorMessage = (
    code: string,
    short_desc: string,
    long_desc: string,
  ): Message => {
    return {
      message: {
        error: {
          code: code,
          short_desc: short_desc,
          long_desc: long_desc,
        },
      },
    }
  }
  

  const UnknownErrorMessage = (): Message => {
    return {
      message: {
        error: {
          code: 'U0001',
          short_desc: 'Unknown',
          long_desc: 'Unknown. Consult administrator',
        },
      },
    }
  }
  
  export { ErrorMessage, UnknownErrorMessage }
  