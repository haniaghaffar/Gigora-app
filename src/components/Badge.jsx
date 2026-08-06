import React from 'react';
import { CheckCircle, XCircle, AlertCircle} from 'lucide-react';

/**
 * Badge component with variants.
 * variant: 'default' | 'success' | 'error' | 'warning' | 'icon'
 */
export default function Badge({ children, variant = 'default', icon = null, className = '' }) {
  const colors = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    icon: 'bg-blue-100 text-blue-800',
  };
  const icons = {
    success: <CheckCircle size={14} />, 
    error: <XCircle size={14} />, 
    warning: <AlertCircle size={14} />, 
    icon: icon,
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${colors[variant]} ${className}`}
    >
      {icons[variant]}
      {children}
    </span>
  );
}
