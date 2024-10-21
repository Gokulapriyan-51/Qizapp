import { Response } from 'express'

function ResponseHandler(res: Response, statusCode: number, responseData: any) {
  res.header('Content-Type', 'application/json')
  const stringJSON = JSON.stringify(responseData, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value,
  )

  console.log(stringJSON)
  res.status(statusCode).send(stringJSON)
}

export { ResponseHandler }
