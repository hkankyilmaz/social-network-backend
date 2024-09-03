import { registerAs } from '@nestjs/config';

export default registerAs('supabase', () => ({
  host: process.env.SUPABASE_HOST,
  port: parseInt(process.env.SUPABASE_PORT),
  username: process.env.SUPABASE_USERNAME,
  password: process.env.SUPABASE_PASSWORD,
  supabase: process.env.SUPABASE_DB,
}));
