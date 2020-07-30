import { details, methodData, response_1, response_2 } from "./data.mock";
export interface IPaymentService {
  getPaymentMethod(): PaymentMethodData[];
  getPaymentDetail(): PaymentDetailsInit;
  verifyPayment(paymentResponse: any): boolean;
  getMockPaymentResponse(merchantID: string): any;
}

export class PaymentService implements IPaymentService {
  getPaymentMethod(): PaymentMethodData[] {
    return methodData;
  }
  getPaymentDetail(): PaymentDetailsInit {
    return details;
  }
  verifyPayment(paymentResponse: any): boolean {
    let { shouldVerify } = paymentResponse;
    return shouldVerify;
  }
  getMockPaymentResponse(merchantID: string): any {
    if (merchantID == "1") return response_1;
    return response_2;
  }
}
