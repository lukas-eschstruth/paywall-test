const checkoutBtnId = 'checkout-btn';
window.addEventListener("ns-bridge-ready", function (e) {
    document.body.classList.remove('loading');

    PAYPAL.apps.PPP({
        "approvalUrl": "https://www.sandbox.paypal.com/checkoutnow?token=6VH52758FV646041B",
        "placeholder": "paywall",
        "mode": "sandbox",
        "country": "DE",
        "language": "de_DE",
        "showLoadingIndicator": true,
        "buttonLocation": "outside",
        "disableContinue": checkoutBtnId,
        "enableContinue": checkoutBtnId
    });

    document.getElementById(checkoutBtnId).addEventListener('click', () => PAYPAL.apps.PPP.doCheckout());
});
