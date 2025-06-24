import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pqvgydthgirviewokczv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdmd5ZHRoZ2lydmlld29rY3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3Nzk1MzgsImV4cCI6MjA2NjM1NTUzOH0.3Q1mRgqN7rYIuGD8Fdibs09UaHFoZgEKl6u8YZWj-lU';         // من مشروعك في supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
