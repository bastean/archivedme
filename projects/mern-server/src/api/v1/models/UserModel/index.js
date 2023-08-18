import mongoose from 'mongoose';

import { Schema } from './Schema';

export const UserModel = mongoose.model('users', Schema.user);
