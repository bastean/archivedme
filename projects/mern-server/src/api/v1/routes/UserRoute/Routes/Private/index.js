import express from 'express';

import { UserControl } from '#controllers';

export class Private {
	static marshaller() {
		const routing = express.Router();

		routing.get('/profile', UserControl.private.getProfile);

		routing.put('/profile', UserControl.private.setProfile);

		routing.put('/change-password', UserControl.private.changePassword);

		routing.delete('/delete', UserControl.private.deleteAccount);

		return routing;
	}
}
