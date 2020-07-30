import { IPaymentService } from "../service/payment.service";

import express from "express";

class PaymentController {
  paymentService: IPaymentService;
  constructor(paymentService: IPaymentService) {
    this.paymentService = paymentService;
  }

  getMerchantMethod = (req: express.Request, res: express.Response) => {
    return res.send(this.paymentService.getPaymentMethod());
  };
  getMerchantPaymentDetail = (req: express.Request, res: express.Response) => {
    return res.send(this.paymentService.getPaymentDetail());
  };

  verifyPayment = (req: express.Request, res: express.Response) => {
    try {
      verifyPaymentResponse(req.body);
      return res.json({ result: this.paymentService.verifyPayment(req.body) });
    } catch (err) {
      return res.status(403).json({ error: err });
    }
  };

  mockPaymentResponse = (req: express.Request, res: express.Response) => {
    return res.send(
      this.paymentService.getMockPaymentResponse(req.params["id"])
    );
  };
}

const verifyPaymentResponse = (paymentResponse: any) => {
  if (!paymentResponse.requestId) throw Error("Payment must have request ID");
  if (!paymentResponse.methodName) throw Error("Payment must have a method");
  if (!paymentResponse.details) throw Error("Payment must have details");
};

export default PaymentController;
