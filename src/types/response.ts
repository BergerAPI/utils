/**
 * This is what a service-function should return, so one can map it
 * to the endpoint-response
 */
type ServiceResponse = {
    status: number,
    content: any
}

export default ServiceResponse;