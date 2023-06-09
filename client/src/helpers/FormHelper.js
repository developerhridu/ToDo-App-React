import toast, { Toaster } from 'react-hot-toast';

class FormHelper {
    IsEmpty(value) {
        return value.trim() === '';
    }

    IsEmail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(value);
        console.log(`Email: ${value}, isValid: ${isValid}`);
        return isValid;
    }


    ErrorToast(message = 'An error occurred') {
        toast.error(message, { position: 'top-center' });
    }

    SuccessToast(message = 'Action completed successfully') {
        toast.success(message, { position: 'top-center' });
    }
}

export const {
    IsEmpty,
    IsEmail,
    ErrorToast,
    SuccessToast
} = new FormHelper();
