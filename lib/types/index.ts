export interface BaseResponse {
  message: string
  severity: 'success' | 'error' | 'warning' | 'info'
}

export type BaseRequest = {}
