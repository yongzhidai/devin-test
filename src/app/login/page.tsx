'use client';

import React from 'react';
import { LoginForm } from '@/components/business/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full">
        <LoginForm />
      </div>
    </div>
  );
}
