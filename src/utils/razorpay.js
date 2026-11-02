export const openRazorpayCheckout = ({
    amountRupees,
    name = 'InternzLearn',
    description = '',
    prefill = {},
    onSuccess,
    onError,
}) => {
    const RAZORPAY_KEY = 'rzp_live_SC3NdmLYHHNtCs'; // stored as VITE_RAZORPAY_KEY_ID in .env

    const loadScript = () =>
        new Promise((resolve, reject) => {
            if (window.Razorpay) { resolve(); return; }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = resolve;
            script.onerror = () => reject(new Error('Razorpay SDK failed to load. Are you online?'));
            document.body.appendChild(script);
        });

    loadScript()
        .then(() => {
            const options = {
                key: RAZORPAY_KEY,
                amount: Math.round(amountRupees * 100), // paise
                currency: 'INR',
                name,
                description,
                image: 'https://internzlearn.com/logo.png',
                prefill: {
                    name: prefill.name || '',
                    email: prefill.email || '',
                    contact: prefill.phone || '',
                },
                theme: { color: '#6366f1' },
                handler: function (response) {
                    if (onSuccess) onSuccess(response);
                },
                modal: {
                    ondismiss: function () {
                        if (onError) onError();
                    },
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function () { if (onError) onError(); });
            rzp.open();
        })
        .catch((err) => {
            alert(err.message || 'Could not open payment gateway.');
            if (onError) onError();
        });
};
