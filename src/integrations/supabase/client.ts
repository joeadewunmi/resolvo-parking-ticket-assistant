// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kzasehqnxvgiwlmlrjlx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6YXNlaHFueHZnaXdsbWxyamx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1MTU3NTcsImV4cCI6MjA1MTA5MTc1N30.sC1kfbJ1MWCi6qvKqhaH74-yNtnKl0kq3nzJmq15a5U";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);