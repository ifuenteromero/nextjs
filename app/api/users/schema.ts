import { z } from 'zod';

const schema = z
	.object({
		name: z.string().min(3),
		email: z.string().email(),
		followers: z.number().int().min(0).optional(),
		isActive: z.boolean().optional(),
	})
	.strict();

export default schema;
