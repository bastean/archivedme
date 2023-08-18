import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

export class Request {
	static limiter = rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 50,
		standardHeaders: false,
		legacyHeaders: false
	});

	static speedLimiter = slowDown({
		windowMs: 15 * 60 * 1000,
		delayAfter: 30,
		delayMs: 500
	});
}
