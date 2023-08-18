import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

export class Request {
	static limiter = rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 5,
		standardHeaders: false,
		legacyHeaders: false
	});

	static speedLimiter = slowDown({
		windowMs: 15 * 60 * 1000,
		delayAfter: 2,
		delayMs: 1000
	});
}
