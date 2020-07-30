import { PaymentService } from "./../service/payment.service";
import express from "express";
import PaymentController from "../controller/payment.controller";

const router = express.Router();

const controller = new PaymentController(new PaymentService());

router.get("/method", controller.getMerchantMethod);
router.get("/payment_detail", controller.getMerchantPaymentDetail);
router.get("/:id/response", controller.mockPaymentResponse);
router.post("/verify", controller.verifyPayment);

export default router;
